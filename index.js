const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://pankaj:qwerty1234@blog.7o79k.mongodb.net/userinfo?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Now You are Connected with Mongodb....");
});

const user = require("./router/router");
app.use("/v1", user);
app.listen(8080, () => {
  console.log("Server Started");
});
