const User = require("../modals/user");
const { findUser, createUser, allUsers } = require("../helpers/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwtUtils");

const registerUser = async function (req, res) {
  try {
    const { name, email, phone, password } = req.body;
    const user = await findUser(email);
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      const newUser = await createUser(req.body);
      const token = generateToken(newUser);
      console.log(token);
      return res.status(200).json({ token, user: newUser.name });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await findUser(email);
    if (!user) {
      return res.status(400).json({ error: "Invalid user" });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = generateToken(user);
        if (user.isAdmin === "admin") {
          return res.status(200).json({ token, user: "admin", data: user });
        } else {
          return res.status(200).json({ token, user: "user", data: user });
        }
      } else {
        return res.status(400).json({ error: "Invalid password" });
      }
    }
  } catch (error) {
    return res.status(400).json({ error: "Internal server error" });
  }
};

const getAlUser = async function (req, res) {
  try {
    
    const users = await allUsers();

    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ error: "Internal server error" });
  }
};

const addUser = async function(req, res){
  try {
    const data = req.body;
    const user = await createUser(data)

    return res.status(200).json({  message: "User added successfully" });
  } catch (error) {
    console.log(error)
  }
}

module.exports = { registerUser, loginUser, getAlUser, addUser };
