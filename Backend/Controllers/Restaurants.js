const Restaurants = require('../Models/Restaurants')

exports.getRestaurantsByLocId = (req, res) => {
    const { locId } = req.params;
    Restaurants.find({location_id : locId})
        .then(responce => {
            res.status(200).json({
                message : "Restaurant data fetched Succefully",
                restaurants : responce
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

// Get the restaurant by restaurant ID

exports.getRestaurantDetailsById = (req, res) => {
    const { resId } = req.params;
    Restaurants.findById(resId)
        .then(responce => {
            res.status(200).json({
                message : "Restaurant data fetched Succefully",
                restaurant : responce
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

exports.restaurantsFilter = (req, res) => {
    const { mealtype, location, cuisine, lcost, hcost, sort, page } = req.body;

    Sort = sort ? sort : 1;
    Page = page ? page : 1;

    const itemsPerPage = 2;

    let startIndex, endIndex;

    let filterObj = {};

    mealtype && (filterObj['mealtype_id'] = mealtype);
    location && (filterObj['location_id'] = location);
    cuisine && (filterObj['cuisine_id'] = { $in : cuisine });
    lcost && hcost && (filterObj['min_price'] = { $lte: hcost, $gte: lcost });

    Restaurants.find(filterObj).sort({min_price : Sort})
        .then(response => {

            startIndex = Page * itemsPerPage - itemsPerPage;
            endIndex   = Page * itemsPerPage;

            const paginatedResponse = response.slice(startIndex, endIndex)

            let arr = [];
            for (let i = 1; i <= Math.ceil(response.length / itemsPerPage); i++) {
                arr.push(i);
            }

            res.status(200).json({
                message : "Restaurant data fetched Succefully",
                restaurants : paginatedResponse,
                totalItems : response.length,
                pageCount : arr,
                activePage: Page
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}