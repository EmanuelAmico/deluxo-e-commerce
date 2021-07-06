const { Users } = require("../models");

const editUser = async (req, res, next) => {
  try {
    const user = await Users.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }); 
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req,res,next) => {
  try {
    const users = await Users.findAll()
      res.status(200).send(users)
  } catch (error) {
    next(error)
  }
}

const getUser = async (req, res, next) => {
  try {
    const { userId } = req.tokenPayload;
    const user = await Users.findOne({
      where: { id: userId },
      attributes: { exclude: ["password", "salt"] },
    });
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  editUser,
  getUser,
  getAllUsers
};
