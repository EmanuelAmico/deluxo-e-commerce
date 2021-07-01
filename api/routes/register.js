const express = require("express");
const router = express.Router();

const { postRegisterUser } = require("../controllers");

router.post("/", postRegisterUser);

module.exports = router;
