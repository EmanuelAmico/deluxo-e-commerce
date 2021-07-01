// const express = require("express");
// const router = express.Router();
// const { Shopcarts, Products } = require("../models");

// router.post("/", async (req, res, next) => {
//   try {
//     const producto = {
//       name: req.body.nombre,
//       price: req.body.precio,
//       description: req.body.descripcion,
//       stock: req.body.stock,
//       image: req.body.image,
//       color: req.body.color,
//       size: req.body.size,
//       genre: req.body.genre,
//       thumbnail: req.body.thumbnail,
//     };
//     const categorias = req.body.categories.split(" ");
//     const productoCreado = await Products.create(producto);
//     for (const categoria of categorias) {
//       const categoriaCreada = await Categories.create({ name: categoria });
//       productoCreado.addCategory(categoriaCreada);
//     }
//     res.status(201).send(productoCreado);
//   } catch (error) {
//     next(error);
//   }
// });
