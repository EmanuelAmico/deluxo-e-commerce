const express = require ("express")
const router = express.Router()
const productsRoutes = require("./products")
const loginRoutes = require("./login")
const registerRoutes = require("./register")
const usersRoutes = require("./users")
const shopcartsRoutes = require("./shopcarts")

router.use("/products", productsRoutes)
router.use("/users", usersRoutes)
router.use("/login", loginRoutes)
router.use("/register", registerRoutes)
router.use("/shopcarts", shopcartsRoutes)

module.exports = router;