const Joi = require('joi');

const HardwareVideoPostSchema = Joi.object({
    video: Joi.string().required(),
    name: Joi.string().required(),
})

module.exports = HardwareVideoPostSchema