const express = require("express");
const { fetchUserById, updateUser } = require("../controllers/User");

const router = express.Router();
// users is already added in base path
router.get("/:id", fetchUserById).post("/:id", updateUser);

exports.router = router;
