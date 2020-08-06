const express = require("express");
const helloController = require("../controllers/hello");
const logger = require("../middleware/log");

const router = express.Router();

// router.get('/:string', (req, res) => {
// res.status(200).send('world'))   first example with no params
//string is defined by what you type into the url params (after path)
// const string = req.params.string;
// res.status(200).send(`Hello ${string}!`);
// })

//replaced callback function by calling it from controllers
router.post("/:string", logger, helloController.hello);
// router.post('/:string', (req, res) => {
//   res.status(200).json({message: req.body.message});
// })

module.exports = router;
