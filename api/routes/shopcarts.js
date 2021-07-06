const express = require("express")
const router = express.Router()
const { getShopcarts, postShopcart, deleteShopcartProduct, putShopCartProduct } = require ("../controllers")

//---------------------- GET ---------------------------//
router.get('/', getShopcarts)

//---------------------- POST ---------------------------//
router.post('/', postShopcart)

//---------------------- PUT ---------------------------//
/* http://localhost:3001/shopcarts/1/products/2 */
router.put('/:shopcartId/products/:productId', putShopCartProduct )

//-------------------- DELETE ---------------------------//
router.delete('/:shopcartId/products/:productId', deleteShopcartProduct )

module.exports = router