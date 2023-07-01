const Joi = require('joi');

const mainGamesPostSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    country: Joi.string().max(30).min(2).required(),
    year: Joi.number(),
    imageURL: Joi.string().required(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
    language: Joi.string().required(),
    backgroundImage: Joi.string().required(),
    voice: Joi.string().required(),
    release: Joi.string().required(),
    publisher: Joi.string().required(),
    info: Joi.string().required(),
})

module.exports = mainGamesPostSchema