const mongoose = require("mongoose")

const mainGamesModel = new mongoose.model("Games",(
    new mongoose.Schema({
        name: String,
        price: Number,
        country: String,
        imageURL: String,
        platform: String,
        genre: String,
        language: String,
        coop: Boolean,
        vibration: Boolean
    })
))

module.exports = mainGamesModel 