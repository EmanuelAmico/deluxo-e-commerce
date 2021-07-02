const express = require("express");
const router = express.Router();
const checkLogIn = require("../middlewares/auth");


const { editUser, getUser } = require("../controllers");

router.put("/", editUser);
router.get("/me", checkLogIn, getUser);


module.exports = router