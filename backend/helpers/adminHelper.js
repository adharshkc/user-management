const Admin = require("../modals/admin")



const findAdmin = async function(data){
   try {
     const admin = await Admin.findOne({email: data});
     return admin;
   } catch (error) {
    console.log(error)
   }
}

module.exports = {findAdmin}