const Joi = require('joi');

const HardwarePostSchema = Joi.object({
    imageURL: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    console: Joi.string().required()
})

module.exports = HardwarePostSchema