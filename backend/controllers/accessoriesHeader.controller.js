const AccessoriesHeaderModel = require("../models/accesssoriesHeader.model")

const accessoriesHeaderController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const accessories = await AccessoriesHeaderModel.find()
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
        const accessories = await AccessoriesHeaderModel.findById(id)
        res.status(200).send(accessories)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const accessories = await AccessoriesHeaderModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${accessories.imageURL} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { imageURL, name, description } = req.body
        const newAccessories = new AccessoriesHeaderModel({
            imageURL: imageURL,
            name: name,
            description: description
        })
        await newAccessories.save()
        res.status(201).send({
            message: `${newAccessories.name} posted successfully!`,
            accessories: newAccessories
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, imageURL, description } = req.body
        const updatingAccessories = { 
            imageURL: imageURL,
            name: name,
            description: description
        }
        const accessories = await AccessoriesHeaderModel.findByIdAndUpdate(id, updatingAccessories)
        res.status(200).send({
            message: `${accessories.name} update successfully!`,
        })
    }
}


module.exports = accessoriesHeaderController