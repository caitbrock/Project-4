const express = require("express");
const router = express.Router();
const postCtrl = require("../../controllers/posts");

router.post("/createPost", postCtrl.create);
router.get("/postIndex", postCtrl.index);

module.exports = router;
