const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Message has been delievered Succesfully"});
});

module.exports = app;