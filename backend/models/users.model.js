const mongoose = require("mongoose")

const UsersModel = new mongoose.model("Users", (
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            minlength: 5,
            required: true,
        },
        isAdmin: {
            type: Boolean
        }
    })
))

module.exports = UsersModel