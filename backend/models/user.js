const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = Schema({
    name : String,
    email : {type:String, unique:true},
    phone : String,
    pass : String
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel