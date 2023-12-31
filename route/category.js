const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/category");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });


router.post("/addcategory", upload.single("categoryImg"), categoryController.addcategory);
router.get("/getcategory", categoryController.getcategory);
router.get("/getallcategory", categoryController.getallcategory);
router.post("/deletecategory/:id", categoryController.postdeletecategory);
router.post("/editcategory/:id",upload.single("categoryImg"), categoryController.editcategory);


module.exports = router;