const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://pankaj:qwerty1234@blog.7o79k.mongodb.net/userinfo?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const app = express();
const user = require("./router/router");

app.use(bodyParser.json());

// Routes: Endpoint
app.use("/v1", user);


// Database Connection
mongoose.connect(url, { useNewUrlParser: true })
.then(() => {
  app.listen(8080, () => {
    console.log("Server Started");
  });
})
.catch(err => {
    console.log('Err ' + err);
});
