const express = require("express");
const router = express.Router();
const boardCtrl = require("../../controllers/boards");

router.post("/", boardCtrl.boardCreate);
router.get("/", boardCtrl.boardIndex);

module.exports = router;
