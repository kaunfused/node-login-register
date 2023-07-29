const express = require("express");

const url = "mongodb://127.0.0.1:27017";
const router = require("./routes/web");
const connect = require("./db/connectdb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

connect(url);

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
