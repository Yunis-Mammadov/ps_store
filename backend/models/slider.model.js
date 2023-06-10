const mongoose = require("mongoose")

const HeroSliderModel = new mongoose.model("HeroSlider",(
    new mongoose.Schema({
        imageURL: String
    })
))

module.exports = HeroSliderModel