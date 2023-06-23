const HardwareVideoPostSchema = require('../validations/hardwareVideo.validation')

const HardwareVideoPostMiddleware = (req, res, next) => {
  const { error } = HardwareVideoPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = HardwareVideoPostMiddleware