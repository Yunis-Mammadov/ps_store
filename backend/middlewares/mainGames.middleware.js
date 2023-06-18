const mainGamesPostSchema = require('../validations/homeGamesPage.validation')

const mainGamesPostMiddleware = (req, res, next) => {
  const { error } = mainGamesPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = mainGamesPostMiddleware