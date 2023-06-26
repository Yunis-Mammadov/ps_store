const mongoose = require("mongoose")

const mainGamesModel = new mongoose.model("mainGames", (
    new mongoose.Schema({
        name: String,
        price: Number,
        country: String,
        year: Number,
        imageURL: String,
        platform: String,
        genre: String,
        language: String,
        voice: String,
        release: String,
        publisher: String
    })
))

module.exports = mainGamesModel 