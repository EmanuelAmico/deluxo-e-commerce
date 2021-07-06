const { Categories } = require("../models");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll()
    res.status(200).send(categories)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getCategories,
}