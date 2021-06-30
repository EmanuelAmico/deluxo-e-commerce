const { Products } = require("../models");

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

const postProduct = (req, res, next) => {
  Products.create(req.body).then((product) => res.status(201).send(product));
};

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
