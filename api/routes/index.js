const express = require ("express")
const router = express.Router()
const productsRoutes = require("./products")
// const shopcartRoutes = require("./shopcarts")

router.use("/products", productsRoutes)
// router.use("/shopcarts", shopcartRoutes)

module.exports = router;