const mongoose = require('mongoose');

const { Schema } = mongoose

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now, required: true },
    profilePhoto: {
        type: String,
        default: function () {
            return `https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon`;
        },
    },
    sub: { type: Boolean, required: true, default: false },
    sub_time: { type: Date },
    role: { type: String, required: true, default: "user" }
})
userSchema.set('toJSON', { gettes: true })
userSchema.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret }
    delete obj._id
    delete obj.__v
    return obj
}

module.exports = mongoose.models.User || mongoose.model("User", userSchema)