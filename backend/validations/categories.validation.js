const Joi = require('joi');

const CategoryPostSchema = Joi.object({
    imageURL: Joi.string().required(),
})

module.exports = CategoryPostSchema