const Joi = require('joi');

const top10GamesPostSchema = Joi.object({
    imageURL: Joi.string().required()
})

module.exports = top10GamesPostSchema