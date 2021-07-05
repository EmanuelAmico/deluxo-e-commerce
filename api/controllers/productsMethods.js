const { Products, Categories } = require("../models");
const { Op } = require("sequelize");

//---------------------- GET ---------------------------//


const getProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll({
      include: {
        model: Categories,
        attributes: ["name"]
      }
    })
    res.status(200).send(products)
  } catch (error) {
    next(error)
  }
};

const getProductsId = async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id)
    if(!product)
      res.status(404).send("Product doesn't exists")
    res.status(200).send(product)
  } catch (error) {
    next(error)
  }
};

// http://localhost:3001/products?category=pantuflas
const getProductsByCategory = async (req, res, next) => {
  try {
    //El req.query -> { category: 'pantuflas' }
    const { category } = req.query
    if(!category)
      res.status(400).send("Not valid query!")
    const products = await Products.findAll({
      include : {
        model : Categories,
        where: {
          name : category
        }
      }
    })
    res.status(200).send(products)
  } catch (error) {
    next(error)
  }
}

// nombre del producto: "Remera Mandalorian" -> "<Tipo de prenda> <Busqueda>"
// http://localhost:3001/products?search=remera
const getProductsBySearch = async (req,res,next) => {
  try {
    const { key } = req.query
    if(!key)
      res.status(400).send("Not valid query!")
    const products = await Products.findAll({
      where: {
        name: {
          [Op.substring] : key
        }
      }
    })
    res.status(200).send(products)
  } catch (error) {
    next(error)
  }
}

//---------------------- POST ---------------------------//


const postProduct = async (req, res, next) => {
  try {
    const { name, description, price, image, stock, color, size, genre, thumbnail } = req.body
    const product = { name, price, description, stock, image, color, size, genre, thumbnail }
    const categories = req.body.categories.split(" ");
    const [createdProduct, wasCreated] = await Products.findOrCreate({
      where: product,
      defaults: product
    });
    if(!wasCreated)
      return res.status(302).send("Product already exists.")
    for (const category of categories) {
      const createdCategory = await Categories.create({ name: category });
      createdProduct.addCategory(createdCategory);
    }
    res.status(201).send(createdProduct);
  } catch (error) {
    next(error);
  }
}

//---------------------- PUT ---------------------------//


const putProduct = async (req, res, next) => {
  try {
    const product = await Products.update(req.body,{
      where: { id: req.params.id },
      returning: true,
    })
    const updated = product[0] //Es un 0 sí no se encontró
    if(!updated)
      res.status(404).send("Product not found")
    res.status(200).send(product)
  } catch (error) {
    next(error)    
  }
};

//Error si quiero modificar algo con lo mismo -> 

//---------------------- DELETE ---------------------------//

const deleteProduct = async (req, res, next) => {
  try {
    const destroyedProduct = await Products.destroy({
      where : {id : req.params.id}
    })
    destroyedProduct ? res.sendStatus(204) : res.sendStatus(404)
  } catch (error) {
    next(error)
  }
};



module.exports = {
  getProducts,
  getProductsId,
  postProduct,
  putProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsBySearch
};


//FIXME Revisar los return para que salgan de la funcion en los errores y no se ejecute lo de abajo e.e