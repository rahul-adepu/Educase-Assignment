const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user.routes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
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
