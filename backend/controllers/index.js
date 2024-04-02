const User = require("../modals/user");
const registerUser = async function (req, res) {
    try{

        const { name, email, phone, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ error: "User already exists" });
        }else{
          const newUser = await User.create({
              name: name,
              email: email,
              phone: phone,
              password: password
          })
          return res.status(200).json({user: newUser.name})
        }
    }catch(error){
        console.log(error)
    }
};

module.exports = { registerUser };
