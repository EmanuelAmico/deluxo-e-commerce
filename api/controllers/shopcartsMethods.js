const { Op } = require("sequelize");
const { Shopcarts, Products } = require("../models");

const getShopcarts = async (req, res, next) => {
  try {
    const shopcarts = await Shopcarts.findAll();
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
    const { shopcartId, productId } = req.body
    const shopCart = await Shopcarts.findByPk(shopcartId)
    const product = await shopCart.hasProduct({
      where: {id: productId}
    })
    res.status(200).send(shopcarts);
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