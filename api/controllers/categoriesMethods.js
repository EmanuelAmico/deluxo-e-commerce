import { Categories } from "../models";

const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll()
  } catch (error) {
    
  }
}

module.exports = {
  getCategories,
}