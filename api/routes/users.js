const express = require("express");
const router = express.Router();
const checkLogIn = require("../middlewares/auth");


const { editUser, getUser, getAllUsers } = require("../controllers");

//---------------------- GET -------------------------//
router.get("/me", checkLogIn, getUser);
router.get("/", getAllUsers)

//---------------------- PUT -------------------------//
router.put("/", editUser);


module.exports = router