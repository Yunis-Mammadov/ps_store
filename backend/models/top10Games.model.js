const mongoose = require("mongoose")

const top10GamesModel = new mongoose.model("top10Games",(
    new mongoose.Schema({
        imageURL: String
    })
))

module.exports = top10GamesModel 