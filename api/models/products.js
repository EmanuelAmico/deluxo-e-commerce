const S = require("sequelize")
const db = require("../db")

class Products extends S.Model {}

Products.init({
  name: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  stock: {
    type: S.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  price: {
    type: S.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  description: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  image: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  color: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  size: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  genre: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  thumbnail: {
    type: S.STRING,
    allowNull: false,
  }
}, { sequelize: db, modelName: 'products' })

module.exports = Products;


Products.addHook("beforeCreate", function (){
  this.stock === 0 ? this.name = `NO DISPONIBLE - ${this.name}` : null
})


