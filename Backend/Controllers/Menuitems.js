const Menuitems = require('../Models/Menuitems');

exports.getMenuItemsByRes = (req, res) => {
    const { resId } = req.params;
    Menuitems.find({restaurantId : resId})
        .then(response => {
            res.status(200).json({
                message : "Menuitems data fetched Succefully",
                menuitems : response
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}