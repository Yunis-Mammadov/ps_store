const AccessoriesHeaderPostSchema = require('../validations/accessoriesHeader.validation')

const AccessoriesHeaderPostMiddleware = (req, res, next) => {
  const { error } = AccessoriesHeaderPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = AccessoriesHeaderPostMiddleware