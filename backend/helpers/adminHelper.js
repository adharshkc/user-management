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

module.exports = { findAdmin, userDelete, userSoftDelete };
