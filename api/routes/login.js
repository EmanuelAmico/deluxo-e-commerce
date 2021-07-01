const express = require("express")
const { postLoginUser } = require("../controllers")
const router = express.Router()

router.post('/', postLoginUser)

module.exports = router