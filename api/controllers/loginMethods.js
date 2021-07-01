const jwt = require("jsonwebtoken")
const { Users } = require("../models");

const postLoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (user) return res.status(400).send("User doesn't exists");
    if (!user.validPassword(password))
      return res.status(401).send("Invalid pass");
    //const token = jwt.sign({ userId: user.id }, "plataforma5");
    //const { id, name } = user;
    //return res.status(200).send({ id, name, email, token });
  } catch(error) {
    next(error)
  }
};

/*
const postLogoutUser = async (req,res,next) => {
  try {
    
  }
}
*/
module.exports = {
    postLoginUser
};
