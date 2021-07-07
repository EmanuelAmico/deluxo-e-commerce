const { Op } = require("sequelize");
const { Shopcarts, Products, ShopcartItems } = require("../models");

const getShopcarts = async (req, res, next) => {
  try {
    const shopcarts = await Shopcarts.findAll({
      include: {
        model: Products
      }
    });
    res.status(200).send(shopcarts);
  } catch (error) {
    next(error)
  }
};

const postShopcart = async (req, res, next) => {
  try {
    const productsInfoArray = req.body;
    const productsIds = productsInfoArray.map(product => product.id)
    const productsQuantities = productsInfoArray.map(product => product.quantity)
    const products = await Products.findAll({
      where: {
        id: {
          [Op.or] : productsIds
        }
      }
    })

    const prices = products.map(product => product.price);
    const total_price = prices.map((price, i) => price * productsQuantities[i]).reduce((accumulator, price) => accumulator + price)
    const emptyShopcart = await Shopcarts.create({ total_price })
    const shopcart = await emptyShopcart.addProducts(products)
    shopcart.forEach(async (shopcartItem, i) => {
      try {
        if(shopcartItem.quantity !== productsQuantities[i]){
          shopcartItem.quantity = productsQuantities[i]
          await shopcartItem.save()
        }
      } catch (error) {
        console.log(error)
      }
    });

    res.status(201).send(shopcart);
  } catch (error) {
    next(error)
  }
};



const putShopCartProduct = async (req, res, next) => {
  try {
    const { shopcartId, productId } = req.params
    const { quantity } = req.body
    if( quantity < 0 )
      return res.status(400).send("Quantity cannot be negative")
    const product = await Products.findByPk(productId)
      if(!product)
        return res.status(400).send("Product not found")
    const shopCart = await Shopcarts.findByPk(shopcartId)
      if(!shopCart)
        return res.status(400).send("Shopcart not found")
    const shopcart_item = await ShopcartItems.findOne({
      where: { productId }
    })
    if(quantity === shopcart_item.quantity)
      return res.status(304).send("Quantity was not modified")
/*     console.log("SHOP CART ITEM.QUANTITY", shopcart_item.quantity)
    console.log("QUANTITY", quantity)
    console.log("PARAMS", req.params)
    console.log("TOTAL PRICE", shopCart.total_price)
    console.log("PRECIO PRODUCTO", product.price)
    console.log("SHOP CART ITEM", shopcart_item) */
    const total_price = shopcart_item.quantity > quantity
                          ? shopCart.total_price - product.price * (shopcart_item.quantity - quantity)
                          : shopCart.total_price + product.price * (quantity - shopcart_item.quantity) 
    console.log("FINAL TOTAL PRICE", total_price)                      
    shopCart.total_price = total_price
    await shopCart.save()
    shopcart_item.quantity = quantity
    await shopcart_item.save()
    res.status(200).send(shopcart_item);
  } catch (error) {
    next(error)
  }
};


const deleteShopcartProduct = async (req, res, next) => {
  try {
    const { shopcartId, productId } = req.body
    //sin user
    const shopcart = await Shopcarts.findByPk(shopcartId)
    const product = await shopcart.getProducts({
      where: {
        id: productId,
      }
    })
    await product.destroy()
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getShopcarts,
  postShopcart,
  putShopCartProduct,
  deleteShopcartProduct,
};