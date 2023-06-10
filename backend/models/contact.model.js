const mongoose = require("mongoose")

const ContactModel = new mongoose.model("Contact",(
    new mongoose.Schema({
        instagram: String,
        facebook: String,
        twitter: String
    })
))

module.exports = ContactModel