const Joi = require('joi');

const AccessoriesHeaderPostSchema = Joi.object({
    imageURL: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
})

module.exports = AccessoriesHeaderPostSchema