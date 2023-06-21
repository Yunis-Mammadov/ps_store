const CategoryModel = require("../models/categories.model")

const CategoryController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const category = await CategoryModel.find()
        if (!name) {
            res.status(200).send(category)
        } else {
            const searchedCategory = category.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchedCategory)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const category = await CategoryModel.findById(id)
        res.status(200).send(category)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const category = await CategoryModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${category.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { imageURL } = req.body
        const newCategory = new CategoryModel({
            imageURL: imageURL,
        })
        await newCategory.save()
        res.status(201).send({
            message: `${newCategory.name} posted successfully!`,
            category: newCategory
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name } = req.body
        const updatingCategory = {
            imageURL: imageURL,
        }
        const category = await CategoryModel.findByIdAndUpdate(id, updatingCategory)
        res.status(200).send({
            message: `${category.name} update successfully!`,
        })
    }
}


module.exports = CategoryController