const { findAdmin, userDelete,userSoftDelete, addUserByAdmin, userEdit } = require("../helpers/adminHelper");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtUtils");
const { allUsers, findUser } = require("../helpers/userHelper");

const adminLogin = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const admin = await findAdmin(email);
    console.log(admin)
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

const deleteUser = async (req, res, next)=>{
  try {
    const id  = req.body.id;
    const deletedUser = await userDelete(id)
    if(deletedUser){
      const softDelete = await userSoftDelete(deletedUser)
    }
    return res.status(200).json({message: "success"})
  } catch (error) {
    return res.status(400).json({ error: "Internal server error" });

  }
}
const addUser = async function (req, res) {
  try {
    const data = req.body;
    console.log("data",data)
    const existingUser = await findUser(req.body.email)
    if(existingUser){
      return res.status(400).json({message: "User already exist"})
    }else{
      const user = await addUserByAdmin(data);
      console.log("user",user)
      return res.status(200).json({ message: "User added successfully" });

    }

  } catch (error) {
    console.log(error);
    return res.status(404).json({message: "Internal server error"})
  }
};

const editUser = async function(req, res){
  try{
    const data = req.body;
    const id = req.body.id;
    const updatedUser = await userEdit(id, data)
    return res.status(200).json({ message: "User updated successfully" });
  }catch(error){
    console.log(error);
    return res.status(404).json({message: "Internal server error"})
  }
}

module.exports = { adminLogin, adminPage, getUsers,deleteUser, addUser, editUser };
