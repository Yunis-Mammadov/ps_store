const Joi = require('joi');

const ContactPostSchema = Joi.object({
    instagram: Joi.string().required(),
    facebook: Joi.string().required(),
    twitter: Joi.string().required()
})

module.exports = ContactPostSchema