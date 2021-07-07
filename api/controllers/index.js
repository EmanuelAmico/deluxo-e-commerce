const productsMethods = require("./productsMethods")
const registerMethods = require("./registerMethods")
const usersMethods = require("./usersMethods")
const loginMethods = require("./loginMethods")
const shopcartsMethods = require("./shopcartsMethods")
const categoriesMethods = require("./categoriesMethods")

module.exports =  {
    ...productsMethods,
    ...usersMethods,
    ...registerMethods,
    ...loginMethods,
    ...shopcartsMethods,
    ...categoriesMethods,
}