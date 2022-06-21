const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealTypeSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    meal_type: {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('Mealtypes', mealTypeSchema, 'mealtypes');