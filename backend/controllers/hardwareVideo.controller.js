const HardwareVideoModel = require("../models/hardwareVideo.model")

const hardwareVideoController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const hardware = await HardwareVideoModel.find()
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
        const hardware = await HardwareVideoModel.findById(id)
        res.status(200).send(hardware)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const hardware = await HardwareVideoModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${hardware.video} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { video, name } = req.body
        const newHardware = new HardwareVideoModel({
            video: video,
            name: name
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
            video: video,
            name: name
        }
        const hardware = await HardwareVideoModel.findByIdAndUpdate(id, updatingHardware)
        res.status(200).send({
            message: `${hardware.name} update successfully!`,
        })
    }
}


module.exports = hardwareVideoController