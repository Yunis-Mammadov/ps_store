const Joi = require('joi');

const AccessoriesPostSchema = Joi.object({
    imageURL: Joi.string().required(),
    name: Joi.string().max(30).min(2).required(),
    price: Joi.number().positive().integer().required()
})

module.exports = AccessoriesPostSchema