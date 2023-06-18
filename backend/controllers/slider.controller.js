const SliderModel = require("../models/slider.model")

const sliderController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const slider = await SliderModel.find()
        if (!name) {
            res.status(200).send(slider)
        } else {
            const searchedSlider = slider.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchedSlider)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const slider = await SliderModel.findById(id)
        res.status(200).send(slider)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const slider = await SliderModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${slider.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { imageURL } = req.body
        const newSlider = new SliderModel({
            imageURL: imageURL
        })
        await newslider.save()
        res.status(201).send({
            message: `${newSlider.name} posted successfully!`,
            slider: newSlider
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const updatingSlider = { 
            imageURL: imageURL
        }
        const slider = await SliderModel.findByIdAndUpdate(id, updatingSlider)
        res.status(200).send({
            message: `${slider.imageURL} update successfully!`,
        })
    }
}


module.exports = sliderController