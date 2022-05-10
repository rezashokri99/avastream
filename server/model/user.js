const mongoose = require('mongoose');

const {Schema} = mongoose

const userSchema = new Schema({
    username: String,
    email : String,
    password : String,
    created : {type:Date , default:Date.now},
})

module.exports = mongoose.model("User" , userSchema)