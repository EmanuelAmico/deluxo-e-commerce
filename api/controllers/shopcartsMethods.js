// const { Shopcarts, ShopcartItems } = require("../models");

// const getShopcarts = async (req, res, next) => {
//   try {
//     const shopcarts = await Shopcarts.findAll();
//     // res.status(200).send(shopcarts);
//   } catch (error) {
//     next(error)
//   }
// };

// const postShopcart = async (req, res, next) => {
//   try {
//     const products = req.body;
//     const shopcart = await Shopcarts.create()
//     const shopcartFull = await shopcart.addProducts(products)
//     res.status(201).send(shopcartFull);
//   } catch (error) {
//     next(error)
//   }
// };

// const postShopcart = async (req, res, next) => {
//   try {
//     const products = req.body.productId
//     const shopcart = await getShopcarts()
//   } catch (error) {
//     next(error)
//   }
// };

// const putShopCart = async (req, res, next) => {
//   const {shopcartId, productId} = req.body
//   const shopCart = await Shopcarts.findByPk(shopcartId)
//   const product = await shopCart.hasProduct({
//     where: {id: productId}
//   })
//   res.status(200).send(shopcarts);
// };


// const deleteShopcartProduct = async (req, res, next) => {
//   try {
//     const { shopcartId, productId } = req.body
//     //sin user
//     const shopcart = await Shopcarts.findByPk(shopcartId)
//     const product = await shopcart.getProducts({
//       where: {
//         id: productId,
//       }
//     })
//     await product.destroy()
//     res.sendStatus(200)
//   } catch (error) {
//     next(error)
//   }
// }

// module.exports = {
//   getShopcarts,
//   postShopcart,
// };



// /* const postShopcart = async (req, res, next) => {
//   try {
//     const shopcart = req.body;
//     const newShopcart = await Shopcarts.create(shopcart);
//     const products = await Products.findAll();
//     const relation = await newShopcart.addProducts(products);
//     console.log(newShopcart);
//     const relation = await newShopcart.addProduct(product)
//     console.log("relation ->", relation);
//     res.status(201).send(newShopcart);
//   } catch (error) {
//     next(error)
//   }
// }; */