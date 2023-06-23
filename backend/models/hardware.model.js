const mongoose = require("mongoose")

const HardwareModel = new mongoose.model("Hardware",(
    new mongoose.Schema({
        imageURL: String,
        name: String,
        price: Number,
    })
))

module.exports = HardwareModel