const mongoose = require("mongoose")

const AccessoriesHeader = new mongoose.model("AccessoriesHeader",(
    new mongoose.Schema({
        imageURL: String,
        name: String,
        description: String
    })
))

module.exports = AccessoriesHeader