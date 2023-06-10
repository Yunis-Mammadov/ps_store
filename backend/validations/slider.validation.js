const Joi = require('joi');

const SliderPostSchema = Joi.object({
    imageURL: Joi.string().required(),
})

module.exports = SliderPostSchema