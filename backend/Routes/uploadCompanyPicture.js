var express = require("express");
var app = express();
const router = express.Router();
var db = require("../dbseed");
var multer = require("multer");
var path = require("path");
//const bodyParser = require("body-parser");
//app.use("/public", express.static(path.join(__dirname, "frontend/public")));

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(
      null,
      "public/"
      //"/Users/surbhi/Documents/STUDY/CMPE273/lab1-Handshake_portal-work6/frontend/public/images/company"
    );
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage }).single("file");

router.post("/uploadCompanyPicture", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log(req.file);

    return res.status(200).send(req.file.filename);
  });
});

module.exports = router;
