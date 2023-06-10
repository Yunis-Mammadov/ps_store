const AccessoriesPostSchema = require('../validations/accessories.validation')

const AccessoriesPostMiddleware = (req, res, next) => {
  const { error } = AccessoriesPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = AccessoriesPostMiddleware