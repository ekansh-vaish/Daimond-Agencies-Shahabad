const express = require('express')
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync");
const Product = require("../Model/product");
const createError = require("../utils/ExpressError");
const ProductSchema = require("../Schema");
const multer = require("multer");

const isAdmin = require("../Middlewares/IsAdmin")
const ensureAuthenticated = require("../Middlewares/Auth")
const ProductController = require("../Controllers/Product");
const CartController = require("../Controllers/Cart");
const AboutUsController = require("../Controllers/Aboutus");
const {storage} = require("../cloudConfig");
const { Contactus } = require('../Controllers/Aboutus');
const upload = multer({ storage }).single("file");


router.post("/product", upload,wrapAsync(ProductController.index));


router.get("/getproducts",wrapAsync(ProductController.renderProduct))


router.delete("/removeproduct/:id",wrapAsync(ProductController.removeProduct))

router.put("/update/:id",wrapAsync(ProductController.editProduct))

router.get("/search/:key",wrapAsync(ProductController.searchProduct))

router.post("/cart/:id",wrapAsync( CartController.AddCart));



router.post("/buyproduct",wrapAsync(CartController.BuyProduct));


router.delete("/itemdelete/:id",wrapAsync(CartController.DeleteItem));

router.post("/aboutus",wrapAsync(AboutUsController.Contactus) );



  module.exports = router;