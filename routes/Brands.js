const express = require("express");
const { fetchBrands } = require("../controllers/Brand");
const { createCategory } = require("../controllers/Category");

const router = express.Router();
// brands is already added in base path
router.get("/", fetchBrands).post("/", createCategory);

exports.router = router;
