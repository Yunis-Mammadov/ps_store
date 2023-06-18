const Joi = require('joi');

const mainGamesPostSchema = Joi.object({
    name: Joi.string().max(30).min(2).required(),
    price: Joi.number().positive().required(),
    country: Joi.string().max(30).min(2).required(),
    imageURL: Joi.string().required(),
    platform: Joi.string().max(30).min(2).required(),
    genre: Joi.string().max(30).min(2).required(),
    language: Joi.string().max(30).min(2).required(),
    isCoop: Joi.boolean().required(),
    isVibration: Joi.boolean().required()
})

module.exports = mainGamesPostSchema