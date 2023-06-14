const Joi = require('joi');

const LoginPostSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required()
})

module.exports = LoginPostSchema