const S = require("sequelize");
const db = require("../db");

class Categories extends S.Model {}

Categories.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "categories", timestamps: false }
);

module.exports = Categories;
