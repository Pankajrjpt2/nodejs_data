const express = require("express");
const { insertUser, getUser, getUserById } = require("../controller/user");
const router = express.Router();
const user = require("../models/user");

// User Routes

router.post("/user", insertUser);
router.get("/user", getUser);
router.get("/user/:id", getUserById);

module.exports = router;
