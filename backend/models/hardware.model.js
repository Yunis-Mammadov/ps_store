const mongoose = require("mongoose")

const HardwareVideoModel = new mongoose.model("Hardware",(
    new mongoose.Schema({
        imageURL: String,
        name: String,
        price: Number,
        console: String
    })
))

module.exports = HardwareVideoModel