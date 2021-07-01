const express = require("express");
const router = express.Router();

const { getProductsId,getProducts, postProduct, putProduct, deleteProduct } = require("../controllers");

router.get("/", getProducts);

router.post("/", postProduct);

router.get("/:id", getProductsId);

router.put("/:id", putProduct);

router.get("/:id", deleteProduct)

module.exports = router
