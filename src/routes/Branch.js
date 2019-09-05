const express = require("express");
const router = express.Router();

const main = require("../controllers/Branch");

router.get("/", main.getAll);
router.post("/", main.insertBranch);
router.patch("/:id", main.updateBranch);
router.delete("/:id", main.deleteBranch);

module.exports = router;
