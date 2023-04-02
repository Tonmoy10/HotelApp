const mongoose = require('mongoose')
const {Schema} = mongoose

const locationSchema = Schema({
    title: String,
    address: String,
    photos: [String],
    features: [String],
    description: String,
    extraInfo: String,
    checkin: Number,
    checkout: Number,
    max: Number,
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'user'} //TO FILL IN THE NAME AUTOMATICALLY
});

const locationModel = mongoose.model('location', locationSchema);

module.export = locationModel;