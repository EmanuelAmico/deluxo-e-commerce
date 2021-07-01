const productsMethods = require("./productsMethods")
const registerMethods = require("./registerMethods")
const usersMethods = require("./usersMethods")
const loginMethods = require("./loginMethods")

module.exports =  {
    ...productsMethods,
    ...usersMethods,
    ...registerMethods,
    ...loginMethods
}