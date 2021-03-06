const express = require("express");
const router = express.Router();
const controller = require("./controller.js");
const multer = require("multer"); // image upload
const upload = multer({
  dest: "./uploads/",
  limits: {
    fieldSize: 50 * 1024 * 1024,
  },
  filename: (req, file, cb) => {
    let filename = Date.now();
    switch (file.mimetype) {
      case "image/png":
        filename = filename + ".png";
        break;
      case "image/jpeg":
        filename = filename + ".jpeg";
        break;
      default:
        break;
    }
    cb(null, filename);
  },
});

router.get("/finduser/:email", controller.findUser);
router.post("/adduser", controller.addUser);
router.post("/updateprofile/:useruid", controller.updateProfile);
router.post("/updatestatus/:listinguid", controller.updateStatus);
router.post("/sell/text", controller.sellText);
router.post(
  "/sell/images/:listinguid",
  upload.array("myFile", 4),
  controller.sellImages
);
router.get("/personallistings/:limited/:selleruid", controller.getPersonalListings);
router.get("/personallistings/:status/:limited/:selleruid", controller.getStatusPersonalListings);
router.get("/browse/all/:resultnum", controller.browseAll);
router.get("/browse/single/:listinguid", controller.browseSingle);
router.get("/browse/:category/:resultnum", controller.browseCategory);
router.get("/browsecount/All-For-Sale", controller.allNumRows);
router.get("/browsecount/:category", controller.categoryNumRows);
router.get("/browsecount/search/:searchval", controller.searchNumRows);
router.get("/save/post/:listinguid/:useruid", controller.saveListing);
router.get("/save/get/:limited/:useruid", controller.getSaved);
router.get("/save/update/:listinguid/:useruid", controller.updateSaved);
router.get("/delete/:listinguid", controller.deleteListing);
router.get("/search/:searchval/:resultnum", controller.search2);

module.exports = router;
