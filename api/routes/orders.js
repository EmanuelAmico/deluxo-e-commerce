const express = require("express");
const { getOrders, postOrder } = require("../controllers");
const router = express.Router();
const checkLogIn = require("../middlewares/auth");


//---------------------- GET -------------------------//
router.get("/", getOrders);
//---------------------- POST -------------------------//
router.post("/", checkLogIn, postOrder);

module.exports = router