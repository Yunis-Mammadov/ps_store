const Joi = require('joi');

const AccessoriesPostSchema = Joi.object({
    imageURL: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    console: Joi.string().required(),
})

module.exports = AccessoriesPostSchema