const express = require("express");
const router = express.Router();

const main = require("../controllers/Category");

router.get("/", main.getAll);
router.post("/", main.insertCategory);
router.patch("/:id", main.updateCategory);
router.delete("/:id", main.deleteCategory);

module.exports = router;
