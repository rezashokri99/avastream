const mongoose = require('mongoose');

const {Schema} = mongoose

const userSchema = new Schema({
    username: String,
    email : String,
    password : String,
    created : {type:Date , default:Date.now},
})
userSchema.set('toJSON',{gettes:true})
userSchema.options.toJSON.transform = (doc, ret) => {
    const obj = {...ret}
    // 
    delete obj._id
    delete obj.__v
    return obj
}

module.exports = mongoose.models.User || mongoose.model("User" , userSchema)