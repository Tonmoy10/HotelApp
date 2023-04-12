const mongoose = require('mongoose')
const {Schema} = mongoose

const hotelSchema = Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'user'}, //TO FILL IN THE NAME AUTOMATICALLY
    title: String,
    address: String,
    photos: [String],
    features: [String],
    description: String,
    extraInfo: String,
    checkin: Number,
    checkout: Number,
    max: Number,
});

const HotelModel = mongoose.model('Hotel', hotelSchema)

module.exports = HotelModel