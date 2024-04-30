const User = require("../modals/user");
const bcrypt = require("bcrypt");

const findUser = async function (data) {
  try {
    console.log(data);
    const user = await User.findOne({email: data });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async function (data) {
  try {
    const { name, email, phone, password } = data;
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const allUsers = async function (page =1, pageSize = 10) {
  try {
     const users = await User.find().skip((page-1)*pageSize).limit(pageSize)
     const totalUsers = await User.countDocuments();
     
    return {
      users,
      totalUsers,
      totalPages:Math.ceil(totalUsers/pageSize),
      currentPage: page
    }
  } catch (error) {
    console.log(error);
  }
};



const findUserById = async function (userId) {
  try {
    const user = await User.findById(userId);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};



module.exports = { findUser, createUser, allUsers, findUserById };
