const GamesPostSchema = require('../validations/games.validation')

const GamesPostMiddleware = (req, res, next) => {
  const { error } = GamesPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = GamesPostMiddleware