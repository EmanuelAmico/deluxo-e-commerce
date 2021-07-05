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
  description: {
    type: S.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: S.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  image: {
    type: S.TEXT,
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


