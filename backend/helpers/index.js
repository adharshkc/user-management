const User = require("../modals/user");
const bcrypt = require("bcrypt");

const findUser = async function (data) {
  try {
    console.log(data)
    const user = await User.findOne({ data });
    console.log(user)
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
      return newUser
  } catch (error) {
    console.log(error);
  }
};

const allUsers = async function(){
    try{
        const users = await User.find();
        return users
    }catch(error){
      console.log(error)
    }
}

const userEdit = async function(userId, data){
  try {
    const {name, email, phone} = data
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          name:name,
          email: email,
          phone: phone,
        },
      },
      { new: true }
    );
    console.log(updatedUser)
    return updatedUser;
  } catch (error) {
    
  }
}

const findUserById = async function(userId){
  try {
    const user = await User.findById(userId)
    console.log(user)
    return user
  } catch (error) {
    
  }
}

module.exports = { findUser, createUser, allUsers, userEdit, findUserById };
