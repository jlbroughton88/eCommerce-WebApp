const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

const multer = require("multer");
const upload = multer(
    { 
        dest: "uploads/" ,
        filename: (req, file, cb) => {
            let filename = Date.now();
            switch(file.mimetype) {
                case "image/png":
                    filename = filename + ".png";
                    break;
                case "image/jpeg":
                    filename = filename + ".jpeg";
                    break
                default:
                break;
            };
            cb(null, filename);
        }
}
    );

router.get("/finduser/:email", controller.findUser);
router.post("/adduser", controller.addUser);
router.post("/updateprofile/:useruid", controller.updateProfile);
router.post("/sell/text",  controller.sellText);
router.post("/sell/images/:listinguid", upload.single('myFile'), controller.sellImages);
router.get("/personallistings/:selleruid", controller.getPersonalListings);
router.get("/browse/all", controller.browseAll);
router.get("/browse/:category", controller.browseCategory);

module.exports = router;