const Admin = require("../modals/admin");
const DeletedUser = require("../modals/deletedUser");
const User = require("../modals/user");

const findAdmin = async function (data) {
  try {
    const admin = await Admin.findOne({ email: data });
    return admin;
  } catch (error) {
    console.log(error);
  }
};

const userDelete = async function (userId) {
  try {
    const user = await User.deleteOne({ _id: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const userSoftDelete = async function (delUser) {
  try {
    const { email, phone } = delUser;
    const userDel = await DeletedUser.create({
      email: email,
      phone: phone,
    });
    return userDel;
  } catch (error) {
    console.log(error)
  }
};

const addUserByAdmin = async function(data){
  try {
    const { name, email, phone } = data;
    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
    });
    return newUser;
  
  } catch (error) {
    console.log(error)
  }
}
const userEdit = async function (userId, data) {
  try {
    const { name, phone } = data;
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          name: name,
          phone: phone,
        },
      },
      { new: true }
    );
    console.log(updatedUser);
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};


const userSearch = async function(data){
  try {
    const users = await User.find({
      $or:[
        { name: { $regex: data, $options: 'i' } }, // Case-insensitive search for name
        { email: { $regex: data, $options: 'i' } } // Case-insensitive search for email
      ]
    });
    return users;
  } catch (error) {
    console.log(error)
  }
}

module.exports = { findAdmin, userDelete, userSoftDelete,userEdit, addUserByAdmin, userSearch };
