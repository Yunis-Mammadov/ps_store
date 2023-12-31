const AccessoriesModel = require("../models/accessories.model")

const accessoriesController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const accessories = await AccessoriesModel.find()
        if (!name) {
            res.status(200).send(accessories)
        } else {
            const searchedAccessories = accessories.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchedAccessories)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const accessories = await AccessoriesModel.findById(id)
        res.status(200).send(accessories)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const accessories = await AccessoriesModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${accessories.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { imageURL, name, price, console } = req.body
        const newAccessories = new AccessoriesModel({
            imageURL: imageURL,
            name: name,
            price: price,
            console: console
        })
        await newAccessories.save()
        res.status(201).send({
            message: `${newAccessories.name} posted successfully!`,
            accessories: newAccessories
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { imageURL, name, price, console } = req.body
        const updatingAccessories = { 
            imageURL: imageURL,
            name: name,
            price: price,
            console: console
        }
        const accessories = await AccessoriesModel.findByIdAndUpdate(id, updatingAccessories)
        res.status(200).send({
            message: `${accessories.name} update successfully!`,
        })
    }
}


module.exports = accessoriesController