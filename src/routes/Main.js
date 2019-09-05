const express = require("express");
const router = express.Router();

const main = require("../controllers/Main");

router.get("/", main.getAll);
router.post("/", main.insertMain);
router.patch("/:id", main.updateMain);
router.delete("/:id", main.deleteMain);

module.exports = router;
