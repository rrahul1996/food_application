const Mealtypes = require('../Models/Mealtypes.js')


exports.getMealtypes = (req, res) => {
    Mealtypes.find()
        .then(responce => {
            res.status(200).json({
                message : "Mealtypes data fetched Succefully",
                mealTypes : responce
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}
