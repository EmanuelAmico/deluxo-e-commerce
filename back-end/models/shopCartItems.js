const S = require("sequelize");
const db = require("../db");

class ShopcartItems extends S.Model {}

ShopcartItems.init(
  {
    quantity: {
      type: S.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },
  },
  { sequelize: db, modelName: "shop_cart_items", timestamps: false }
);

module.exports = ShopcartItems;
