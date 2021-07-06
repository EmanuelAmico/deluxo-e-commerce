const express = require("express");
const router = express.Router();
const checkLogIn = require("../middlewares/auth");


const { editUser, getUser, getAllUsers, deleteAdmin } = require("../controllers");

//---------------------- GET -------------------------//
router.get("/me", checkLogIn, getUser);
router.get("/", getAllUsers)

//---------------------- PUT -------------------------//
router.put("/:id", editUser);

//---------------------- DELET -------------------------//
router.delete("/:id", deleteAdmin );

module.exports = router