const { Op } = require("sequelize");
const { Shopcarts, Products } = require("../models");

const getShopcarts = async (req, res, next) => {
  try {
    const shopcarts = await Shopcarts.findAll();
    res.status(200).send(shopcarts);
  } catch (error) {
    next(error)
  }
};

/* const postShopcart = async (req, res, next) => {
  try {
    const productsInfoArray = req.body;
    const productsIds = productsInfoArray.map(product => product.id)
    const productsQuantities = productsInfoArray.map(product => product.quantity)
    const products = await Products.findAll({
      where: {
        id: {
          [Op.or] : productsIds
        }
      }
    })

    let finalProducts = products.map((product, i) => {
      const result = []
      for(let j=0; j<productsQuantities[i]; j++){
        result.push(product)
      }
      return result
    })
    console.log(finalProducts)
    finalProducts = finalProducts.flat()
    // console.log(finalProducts)

    const pricesArray = []
    finalProducts.forEach(product => {
      pricesArray.push(product.price)
    });
    const total_price = pricesArray.reduce((accumulator, price) => accumulator + price )
    // console.log("total_price ->", total_price)
    const shopcart = await Shopcarts.create({ total_price })
    const shopcartFull = await shopcart.addProducts(finalProducts, { ignoreDuplicates: true }) //ignoreDuplicates no funciona cuando individualHooks está true :( #bug
    console.log("shopcartFull", shopcartFull)
    res.status(201).send(shopcartFull);
  } catch (error) {
    next(error)
  }
}; */






const postShopcart = async (req, res, next) => {
  try {
    const productsInfoArray = req.body;
    const productsIds = productsInfoArray.map(product => product.id)
    const productsQuantities = productsInfoArray.map(product => product.quantity)
    const products = await Products.findAll({
      where: {
        id: {
          [Op.or] : productsIds
        }
      }
    })

    const prices = products.map(product => product.price);
    console.log("prices ->", prices)
    console.log("productsQuantities ->", productsQuantities)
   /*  const total_price = prices.reduce((accumulator, price, i) => accumulator + price * productsQuantities[i])
    //FIXME no tiene sentidoooooooooooooooooooo aaaaaaaaaaaaaaaaaaaa, no se usar reducer >:(
    console.log("total_price ->", total_price) */
    const total_price = prices.map((price, i) => price * productsQuantities[i]).reduce((accumulator, price) => accumulator + price)
    console.log("total_price ->", total_price)

    const emptyShopcart = await Shopcarts.create({ total_price })
    const shopcart = await emptyShopcart.addProducts(products)
    console.log("shopcart with products but wrong quantity ->", shopcart)
    shopcart.forEach(async (shopcartItem, i) => {
      try {
        if(shopcartItem.quantity !== productsQuantities[i]){
          shopcartItem.quantity = productsQuantities[i]
          await shopcartItem.save()
        }
      } catch (error) {
        console.log(error)
      }
    });
    console.log("final shopcart ->", shopcart)
    res.status(201).send(shopcart);
  } catch (error) {
    next(error)
  }
};



const putShopCart = async (req, res, next) => {
  const {shopcartId, productId} = req.body
  const shopCart = await Shopcarts.findByPk(shopcartId)
  const product = await shopCart.hasProduct({
    where: {id: productId}
  })
  res.status(200).send(shopcarts);
};


const deleteShopcartProduct = async (req, res, next) => {
  try {
    const { shopcartId, productId } = req.body
    //sin user
    const shopcart = await Shopcarts.findByPk(shopcartId)
    const product = await shopcart.getProducts({
      where: {
        id: productId,
      }
    })
    await product.destroy()
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getShopcarts,
  postShopcart,
  putShopCart,
  deleteShopcartProduct,
};



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