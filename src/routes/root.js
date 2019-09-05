const express = require("express");
const main = require("../routes/main");
const product = require("../routes/product");
const branch = require("../routes/Branch");
const category = require("../routes/Category");

const router = express.Router();

//Route Milik roduct
router.use("/main", main);
router.use("/product", product);
router.use("/branch", branch);
router.use("/category", category);

module.exports = router;
