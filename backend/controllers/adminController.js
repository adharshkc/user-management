const { findAdmin } = require("../helpers/adminHelper");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtUtils");
const { emit } = require("nodemon");
const { allUsers } = require("../helpers/userHelper");

const adminLogin = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body.data;
    const admin = await findAdmin(email);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    } else {
      const passwordMatch = await bcrypt.compare(password, admin.password);
      if (passwordMatch) {
        console.log("alkjd");
        const token = generateToken(admin, (role = "admin"));
        return res.status(200).json({ token, admin: admin });
      } else {
        return res.status(404).json({ message: "Invalid Password" });
      }
    }
  } catch (error) {
    next(error);
  }
};

const adminPage = (req, res, next) => {
  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await allUsers();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ error: "Internal server error" });
  }
};

module.exports = { adminLogin, adminPage, getUsers };
