const S = require("sequelize");
const db = require("../db");

class Categories extends S.Model {}

Categories.init({
    category_name: {
        type: S.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    icon: {
        type: S.STRING,
        allowNull: false,
      },
},{sequelize: db, modelName: "categories", timestamps: false})

module.exports = Categories;