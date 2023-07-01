const mongoose = require("mongoose")

const AccessoriesModel = new mongoose.model("Accessories", (
    new mongoose.Schema({
        imageURL: String,
        name: String,
        price: Number,
        console: String
    })
))

module.exports = AccessoriesModel