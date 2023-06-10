const HardwareModel = require("../models/hardware.model")

const hardwareController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const hardware = await HardwareModel.find()
        if (!name) {
            res.status(200).send(hardware)
        } else {
            const searchedHardware = hardware.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchedHardware)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const hardware = await HardwareModel.findById(id)
        res.status(200).send(hardware)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const hardware = await HardwareModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${hardware.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { imageURL, name, price } = req.body
        const newHardware = new HardwareModel({
            imageURL: imageURL,
            name: name,
            price: price
        })
        await newHardware.save()
        res.status(201).send({
            message: `${newHardware.name} posted successfully!`,
            hardware: newHardware
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name } = req.body
        const updatingHardware = { 
            imageURL: imageURL,
            name: name,
            price: price
        }
        const hardware = await HardwareModel.findByIdAndUpdate(id, updatingHardware)
        res.status(200).send({
            message: `${hardware.name} update successfully!`,
        })
    }
}


module.exports = hardwareController