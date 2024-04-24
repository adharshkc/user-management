const { findAdmin } = require("../helpers/adminHelper");

const adminLogin = async (req, res, next)=>{
   try {
     const {email, password} = req.body.data;
     const admin = await findAdmin(email)
     if(!admin){
        return next({statusCode: 404, message: "Admin not found"})
     }
   } catch (error) {
    next(error)
   }
}

module.exports = {adminLogin}