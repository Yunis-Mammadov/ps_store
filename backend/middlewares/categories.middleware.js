const CategoryPostSchema = require('../validations/categories.validation')

const CategoryPostMiddleware = (req, res, next) => {
  const { error } = CategoryPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = CategoryPostMiddleware