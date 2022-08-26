const express = require("express");
const router = express.Router();
const upload = require("../../controllers/aws");
const singleUpload = upload.single("file");

router.post("/", function (req, res) {
  singleUpload(req, res, function (err) {
    console.log("Uploaded!", req.files);
  });
});

module.exports = router;
