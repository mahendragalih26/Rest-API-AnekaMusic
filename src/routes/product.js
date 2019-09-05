const express = require("express");
const router = express.Router();

const main = require("../controllers/Product");

router.get("/", main.getAll);
router.get("/max", main.getMax);
router.post("/", main.insertProduct);
router.patch("/:id", main.updateProduct);
router.delete("/:id", main.deleteProduct);

module.exports = router;
