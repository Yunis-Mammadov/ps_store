const mongoose = require("mongoose")

const homeGamesModel = new mongoose.model("Games",(
    new mongoose.Schema({
        name: String,
        price: Number,
        country: String,
        year: Number,
        imageURL: String,
        platform: String,
        genre: String,
        language: String,
        coop: Boolean,
        vibration: Boolean
    })
))

module.exports = homeGamesModel 