const express = require("express");
const cors = require("cors");     
const connect = require("./helper/db");
// const { default: mongoose } = require("mongoose");
const routes = require("./routes");

const port = 1000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes.shortIdRoute);

connect();

app.get("/", async (req, res) => {
  await connect();
  res.send("no");
});

app.listen(port);
