const User = require("../modals/user");
const {
  findUser,
  createUser,
  allUsers,
  findUserById,
  
} = require("../helpers/userHelper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwtUtils");

const registerUser = async function (req, res) {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body)
    const user = await findUser(email);
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      const newUser = await createUser(req.body);
      const token = generateToken(newUser, "user");
      console.log(token);
      return res.status(200).json({ token, user: "user", data: newUser });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async function (req, res) {
  try {
    console.log(req.body.data)
    const { email, password } = req.body;
    const user = await findUser(email);

    if (!user) {
      return res.status(404).json({ message: "User not found, kindly register" });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = generateToken(user, role="user");
      
          return res.status(200).json({ token, user: user });
        
      } else {
        return res.status(404).json({ message: "Invalid password" });
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

const addUser = async function (req, res) {
  try {
    const data = req.body;
    const user = await createUser(data);

    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
  }
};



const getUser = async function (req, res) {
  console.log("edit");
  try {
    const id = req.params.id;
    console.log(id);
    const user = await findUserById(id);
    console.log(user);
    return res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
  }
};



const getHome = async function(req, res){
  try {
    console.log(req.headers.authorization)
    console.log("logged in ")
    res.status(200).json({message: "success"})
  } catch (error) {
    console.log(error)
  }
}

const getAdmin = async function(req, res){
  try {
    res.status(200).json({message: "success"})
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  registerUser,
  loginUser,
  getAlUser,
  addUser,
  getUser,
  getHome,
  getAdmin
};
