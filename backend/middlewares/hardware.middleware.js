const HardwarePostSchema = require('../validations/hardware.validation')

const HardwarePostMiddleware = (req, res, next) => {
  const { error } = HardwarePostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = HardwarePostMiddleware