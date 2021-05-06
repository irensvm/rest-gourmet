const mongoose = require("mongoose")
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    gourmetName: {
        type: String,
        required: true
    },
    restName:{
        type: String,
        required: true
    },
    instagram:{
        type: String
    },
    type:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Restaurant', restaurantSchema);
