const express = require("express");
const { getOrders, postOrder, putSpecificOrder } = require("../controllers");
const router = express.Router();
const checkLogIn = require("../middlewares/auth");


//---------------------- GET -------------------------//
router.get("/", getOrders);
//---------------------- POST -------------------------//
router.post("/", checkLogIn, postOrder);
//---------------------- PUT -------------------------//
router.put("/:orderId", putSpecificOrder)


module.exports = router