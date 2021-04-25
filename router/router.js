const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const userinfo = await user.find();
    res.json(userinfo);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", (req, res) => {
  const { name, email, gender, askQuestion } = req.body;

  const usersend = new user({
    name: name,
    email: email,
    gender: gender,
    askQuestion: askQuestion,
  });

  usersend.save()
  .then(result => {
      res.status(200).json({
          data: result,
          status: 1,
          message: 'SUCCESS'
      })
  })
  .catch(err => {
      res.json({
          status:0,
          message: 'FAILED'
      })
  })
});

module.exports = router;
