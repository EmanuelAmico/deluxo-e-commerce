const express = require("express");
const router = express.Router();

const { getProductsId,getProducts, postProduct, putProduct, deleteProduct, getProductsByCategory, getProductsBySearch } = require("../controllers");

// http://localhost:3001/api/products/filter?category=pantuflas
router.get("/search", getProductsBySearch)
router.get("/filter", getProductsByCategory)

router.get("/", getProducts);

router.post("/", postProduct);

router.get("/:id", getProductsId);


router.put("/:id", putProduct);

router.get("/:id", deleteProduct)

module.exports = router
