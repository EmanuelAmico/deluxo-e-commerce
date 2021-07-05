const express = require("express")
const router = express.Router()
const { getShopcarts, postShopcart, deleteShopcartProduct, putShopCartProduct } = require ("../controllers")

router.get('/', getShopcarts)

router.post('/', postShopcart)

// http://localhost:3001/shopcarts/1/products/2
router.delete('/:shopcartId/products/:productId', deleteShopcartProduct )
router.put('/:shopcartId/products/:productId', putShopCartProduct )

module.exports = router