const user = require("../models/user");

module.exports = {
  insertUser: (req, res) => {
    const { name, email, gender, askQuestion } = req.body;

    const usersend = new user({
      name: name,
      email: email,
      gender: gender,
      askQuestion: askQuestion,
    });

    usersend
      .save()
      .then((result) => {
        res.status(200).json({
          data: result,
          status: 1,
          message: "SUCCESS",
        });
      })
      .catch((err) => {
        res.json({
          status: 0,
          message: "FAILED",
        });
      });
  },

  getUser: async (req, res) => {
    try {
      const userinfo = await user.find();
      res.json(userinfo);
    } catch (err) {
      res.send("Error" + err);
    }
  },

  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const userinfo = await user.find({ _id: id });
      res.json(userinfo);
    } catch (err) {
      res.send("Error" + err);
    }
  },
};
