const { Orders, Users, Shopcarts } = require("../models")


const getOrders = async (req, res, next) => {
  try {
    const orders = await Orders.findAll()
    res.status(200).send(orders)
  } catch (error) {
    next(error)
  }
}

const postOrder = async (req, res, next) => {
  try {
    const { userId } = req.tokenPayload
    const { payment_method, shopcartId } = req.body
    const user = await Users.findByPk(userId)
    if(!user)
      return res.status(400).send("User not found!")
    const shopcart = await Shopcarts.findByPk(shopcartId)
    if(!shopcart)
      return res.status(400).send("Shopcart was not found")
    const order = await Orders.create({ payment_method })
    const linkedShopcart = await order.setShop_cart(shopcart)
    await user.addOrder(order)
    res.status(200).send(linkedShopcart)
  } catch (error) {
    next(error)
  }
}



module.exports = {
  getOrders,
  postOrder
}