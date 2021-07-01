const productsMethods = require("./productsMethods")
const shopcartsMethods = require("./shopcartsMethods")

module.exports =  {
    ...productsMethods,
    ...shopcartsMethods,
}