var express = require("express");
const router = express.Router();
var db = require("../dbseed");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(
      null,
      "/Users/surbhi/Documents/STUDY/CMPE273/lab1-Handshake_portal-work6/frontend/public/images/students"
    );
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage }).single("file");

router.post("/uploadstudentpicture", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      console.log("err1");
      return res.status(500).json(err);
    } else if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    console.log(req.file);

    return res.status(200).send(req.file.filename);
  });
});

module.exports = router;
