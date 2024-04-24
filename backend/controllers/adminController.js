const { findAdmin } = require("../helpers/adminHelper");
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/jwtUtils");

const adminLogin = async (req, res, next)=>{
   try {
     const {email, password} = req.body.data;
     const admin = await findAdmin(email)
     if(!admin){
      console.log("alkjd")
        return res.status( 404).json({message: "Admin not found"})
     }else{
      const passwordMatch = await bcrypt.compare(password, admin.password);
      if(passwordMatch){
         const token = generateToken({role: "admin"})
         return res.status(200).json({token, admin:admin})
      }else{
        return res.status( 404).json({message: "Invalid Password"})

      }
     }
   } catch (error) {
    next(error)
   }
}

module.exports = {adminLogin}