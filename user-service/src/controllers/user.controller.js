const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log("get all sures erros ",err)
    next(err);
  }
};

exports.createUser = async (req, res, next) => {

  console.log(req.body)
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
