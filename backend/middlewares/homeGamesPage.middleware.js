const homeGamesPostSchema = require('../validations/homeGamesPage.validation')

const homeGamesPostMiddleware = (req, res, next) => {
  const { error } = homeGamesPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = homeGamesPostMiddleware