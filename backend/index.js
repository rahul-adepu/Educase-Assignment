const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(process.env.PORT, async () => {
  try {
    await connectDB();
    console.log("Database Connected!!!");
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
});
