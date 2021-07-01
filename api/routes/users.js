const express = require("express");
const router = express.Router();


const { editUser,getUser } = require("../controllers");

router.put("/", editUser);
router.get("/me", getUser);


module.exports = router