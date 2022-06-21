const location = require('../Models/locations.js')


exports.getLocations = (req, res) => {
    location.find()
        .then(responce => {
            res.status(200).json({
                message : "Location data fetched Succefully",
                locations : responce
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}
