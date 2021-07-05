const { Products, Categories } = require("../models");
const { Op } = require("sequelize");

//---------------------- GET ---------------------------//


const getProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll()
    res.status(200).send(products)
  } catch (error) {
    next(error)
  }
};

const getProductsId = async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id)
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
    const producto = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      image: req.body.image,
      color: req.body.color,
      size: req.body.size,
      genre: req.body.genre,
      thumbnail: req.body.thumbnail,
    };
    const categorias = req.body.categories.split(" ");
    const productoCreado = await Products.create(producto);
    for (const categoria of categorias) {
      const categoriaCreada = await Categories.create({ name: categoria });
      productoCreado.addCategory(categoriaCreada);
    }
    res.status(201).send(productoCreado);
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

//---------------------- DELETE ---------------------------//

const deleteProduct = async (req, res, next) => {
  try {
    const destroy = await Products.destroy({
      where : {id : req.params.id}
    })
    res.status(204).send(destroy)
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
