const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./Database/dbConnection");
const authRouter = require("./Routes/AuthRouter");
const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors());

app.get("/hii", (req, res) => {
  res.send("Hii");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

dbConnection();

module.exports = app;
