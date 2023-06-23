const Joi = require('joi');

const HardwarePostSchema = Joi.object({
    imageURL: Joi.string().required(),
    name: Joi.string().max(30).min(2).required(),
    price: Joi.number().positive().required(),
})

module.exports = HardwarePostSchema