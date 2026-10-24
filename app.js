const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/", (req, res)=> {
    res.send("WELCOME TO THE HOME PAGE OF THE WEBSITE")
})

app.use("/api/users", userRoutes);

module.exports = app;