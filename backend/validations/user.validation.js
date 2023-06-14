const Joi = require('joi');

const verifyJWTMiddlewarePostSchema = Joi.object({
    username: Joi.string().required(),
    name: Joi.string().max(30).min(2).required(),
    email: Joi.email().required()
})

module.exports = verifyJWTMiddlewarePostSchema