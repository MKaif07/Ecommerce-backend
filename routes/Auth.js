const express = require("express");
const { fetchUserById, updateUser } = require("../controllers/User");

const router = express.Router();
// brands is already added in base path
router.post("/signup", createUser);

exports.router = router;
