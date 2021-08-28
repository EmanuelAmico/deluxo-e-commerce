const productsMethods = require("./productsMethods");
const usersMethods = require("./usersMethods");
const shopcartsMethods = require("./shopcartsMethods");
const categoriesMethods = require("./categoriesMethods");
const orderMethods = require("./ordersMethods");
const authMethods = require("./authMethods");

module.exports = {
  ...productsMethods,
  ...usersMethods,
  ...shopcartsMethods,
  ...categoriesMethods,
  ...orderMethods,
  ...authMethods,
};
