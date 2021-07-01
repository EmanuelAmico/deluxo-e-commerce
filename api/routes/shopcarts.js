const express = require("express")
const router = express.Router()
const { Shopcarts, Products } = require("../models")

router.get('/', async (req, res, next) => {
  const shopcarts = await Shopcarts.findAll()
  res.status(200).send(shopcarts)
})

router.post('/', async (req, res, next) => {
  const shopcart = req.body
  const newShopcart = await Shopcarts.create(shopcart)
  const products = await Products.findAll()
  const relation = await newShopcart.addProducts(products)
  console.log(newShopcart)
  /* const relation = await newShopcart.addProduct(product) */
  console.log("relation ->", relation)
  res.status(201).send(newShopcart)
}) 

module.exports = router