var express = require("express");
var router = express.Router();
var auth = require("../middleware/auth");
const hotelController = require("../controller/hotelController");
//routes for Hotels
router.get("/all", auth, hotelController.getAll);

router.post("/search", auth, hotelController.searchHotel);
//Routes for Cart

router.post('/addcart',auth,hotelController.addCart)

router.get("/allcarts", auth, hotelController.getCart);

router.delete("/delete/:id", auth, hotelController.deleteCart);

//Routes for Orders

router.post("/addorder", auth, hotelController.addOrder);

router.get('/allorders',auth,hotelController.getOrder)

module.exports = router;
