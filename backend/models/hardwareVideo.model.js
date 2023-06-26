const mongoose = require("mongoose")

const HardwareVideoModel = new mongoose.model("Hardwarevideo",(
    new mongoose.Schema({
        video: String,
        name: String,
    })
))

module.exports = HardwareVideoModel