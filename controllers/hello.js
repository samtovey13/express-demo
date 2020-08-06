exports.hello = (req, res) => {
  console.log(req.query);
  const string = req.params.string;
  res.status(200).send(`Hello ${string}!`);
};
