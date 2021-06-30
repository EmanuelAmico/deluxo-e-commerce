const express = require("express");
const router = express.Router();

const { Products } = require("../models");

router.get("/", (req, res, next) => {
  Products.findAll()
    .then((products) => res.status(200).send(products))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Products.findByPk(req.params.id).then((product) => res.status(200).send(product));
});

router.post("/", (req, res, next) => {
  Products.create(req.body).then((product) => res.status(201).send(product));
});

router.put("/:id", (req, res, next) => {
  Products.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  }).then((user) => res.status(200).send(user));
});

router.get("/:id", (req,res,next) => {
    Products.destroy( {
        where: { id: req.params.id }
    }).then(() => res.status(204))
})

