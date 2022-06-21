const Orders = require('../Models/Orders')

exports.saveOrderDetails = (req, res) => {
    const { placedBy, placedByUserId, placedOn, items, Amount, restaurantId } = req.body;

    const orderObj = new Orders({
        placedBy, 
        placedByUserId, 
        placedOn, 
        items, 
        Amount, 
        restaurantId
    });
    
    orderObj.save()
        .then(responce => {
            res.status(200).json(
                {
                    message  : "Order Details Fetch Succefully",
                    Orders : responce
                }
            )
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
}

// Get the order by user id

exports.getOrderByUserId = (req, res) => {
    const { userId } = req.params;
    Orders.find({ placedByUserId : userId })
        .then(responce => {
            res.status(200).json({
                message : "Orders fetched Succefully",
                Orders : responce
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}