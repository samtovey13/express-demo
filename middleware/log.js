const logger = (req, res, next) => {
  if (req.params.string !== 'password') {
    res.status(404).send("you did not guess the password");
  } else {
    next();
  }
};

module.exports = logger;
