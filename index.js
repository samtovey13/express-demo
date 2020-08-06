const express = require("express");
const helloRouter = require('./routes/hello')

const app = express();

app.use(express.json());

app.listen(8000, () => console.log("app is listening on port 8000"));

// app
//   .route("/")
//   .get((request, response) => {
//     response.status(200).send("Hello World");
//   })
//   .post((req, res) => {
//     res.status(200).send("Happy Birthday");
//   });

app.use('/hello', helloRouter);
