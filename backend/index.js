const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
