const { Users } = require("../models");

const editUser = async (req, res, next) => {
  try {
    console.log("BODYYYYY", req.body);
    const user = await Users.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }); 
    const updated = user[0] //Es un 0 sí no se encontró
    if(!updated)
      res.status(404).send("User not found")
    res.status(200).send(user)
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

const deleteAdmin = async (req, res, next) => {
  try {
  const destroyedUser = await Users.destroy({
    where:{id : req.params.id}
  })   
  destroyedProduct ? res.sendStatus(204) : res.sendStatus(404)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  editUser,
  getUser,
  getAllUsers,
  deleteAdmin
};
