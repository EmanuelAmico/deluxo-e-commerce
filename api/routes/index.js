const express = require ("express")
const router = express.Router()
const productsRoutes = require("./products")
const loginRoutes = require("./login")
const registerRoutes = require("./register")
const usersRoutes = require("./users")


router.use("/products", productsRoutes)
router.use("/users", usersRoutes)
router.use("/login", loginRoutes)
router.use("/register", registerRoutes)


module.exports = router;