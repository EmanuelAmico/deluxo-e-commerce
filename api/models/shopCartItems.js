const S = require("sequelize")
const db = require("../db")

class ShopcartItems extends S.Model {}

ShopcartItems.init({
  quantity: {
    type: S.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
}, { sequelize: db, modelName: 'shop_cart_items', timestamps: false })

module.exports = ShopcartItems

ShopcartItems.addHook("beforeBulkCreate", async shopcartItems => {
  try {
    console.log(shopcartItems) //Es un arreglo :o
    const quantity = await ShopcartItems.count({ where: { productId: shopcartItems.productId }})
    console.log("shopcartItem ->", shopcartItems)
    console.log("quantity ->", quantity)
    shopcartItem.quantity = ++quantity
  } catch (error) {
    console.log(error)
  }
})