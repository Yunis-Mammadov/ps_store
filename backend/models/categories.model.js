const mongoose = require("mongoose")

const CategoryModel = new mongoose.model("Category",(
    new mongoose.Schema({
        imageURL: String,
        name: String,
    })
))

module.exports = CategoryModel 