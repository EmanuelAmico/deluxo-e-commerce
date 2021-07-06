const { Products, Categories } = require("../models");

const getProducts = (req, res, next) => {
  Products.findAll()
    .then((products) => res.status(200).send(products))
    .catch(next);
};

const getProductsId = (req, res, next) => {
  Products.findByPk(req.params.id).then((product) =>
    res.status(200).send(product)
  );
};

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

const putProduct = (req, res, next) => {
  Products.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  }).then((user) => res.status(200).send(user));
};

const deleteProduct = (req, res, next) => {
  Products.destroy({
    where: { id: req.params.id },
  }).then(() => res.status(204));
};

module.exports = {
  getProducts,
  getProductsId,
  postProduct,
  putProduct,
  deleteProduct,
};
