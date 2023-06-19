const top10GamesPostSchema = require('../validations/top10Games.validation')

const top10GamesPostMiddleware = (req, res, next) => {
  const { error } = top10GamesPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = top10GamesPostMiddleware