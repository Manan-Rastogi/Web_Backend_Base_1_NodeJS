require('dotenv').config()
const express = require("express");
const app = express();
console.log('process.env', process.env.PORT)
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
    res.send("Welcome!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT ? process.env.PORT : port}`);
});
