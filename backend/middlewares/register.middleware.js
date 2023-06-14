const RegisterPostSchema = require('../validations/register.validation')

const RegisterPostMiddleware = (req, res, next) => {
  const { error } = RegisterPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = RegisterPostMiddleware