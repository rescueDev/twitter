const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.fetchUsers = async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const users = await User.findAll();
    //response with users json
    res.send(JSON.stringify({ users }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.fetchUser = async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");

  const user_id = req.params.userID;
  try {
    const user = await User.findOne({ id: user_id });
    res.send(JSON.stringify({ user }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.signUp = async (req, res, next) => {
  //Set header JSON
  res.setHeader("Content-Type", "application/json");
  res.json({ requestBody: req.body });
  [];
  const name = req.body.name;
  const surname = req.body.surname;
  const username = req.body.username;
  const email = req.body.email;
  const avatar = req.body.avatar;
  const password = req.body.password;

  //hash password before insert
  const hashed_password = bcrypt.hashSync(password, saltRounds);

  const user = { name, surname, username, email, avatar, hashed_password };

  try {
    await User.create(user);
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.editUser = async (req, res, next) => {
  //Set header JSON
  res.setHeader("Content-Type", "application/json");

  const user_id = req.params.userID;
  const name = req.body.name;
  const surname = req.body.surname;
  const username = req.body.username;
  const email = req.body.email;
  const avatar = req.body.avatar;

  const values = {
    name,
    surname,
    username,
    email,
    avatar,
  };
  try {
    const user = await User.findByPk(user_id);
    const updated_user = await user.update(values);
    res.send(JSON.stringify({ updated_user }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.deleteUser = async (req, res, next) => {
  //Set header JSON
  res.setHeader("Content-Type", "application/json");

  const user_id = req.params.userID;

  try {
    const user = await User.findByPk(user_id);
    await user.destroy();
    res.send("User " + user_id + " eliminato con successo");
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

//auth
exports.signIn = (req, res, next) => {};
exports.signOut = (req, res, next) => {};
