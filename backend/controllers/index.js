const User = require("../modals/user");
const bcrypt = require("bcrypt")
const registerUser = async function (req, res) {
    try{

        const { name, email, phone, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ error: "User already exists" });
        }else{
            const salt =10;
            const hashedPassword = await bcrypt.hash(password, salt)
          const newUser = await User.create({
              name: name,
              email: email,
              phone: phone,
              password: hashedPassword
          })
          return res.status(200).json({user: newUser.name})
        }
    }catch(error){
        console.log(error)
    }
};

const loginUser = async function(req, res){
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({error: "Invalid user"})
        }else{
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(passwordMatch){
                if(user.isAdmin==="admin"){
                    return res.status(200).json({user: "admin", data: user})
                }else{
                    return res.status(200).json({user:"user", data: user})
                }
            }else{
                return res.status(400).json({ error: "Invalid password" });
            }
        }
    }catch(error){
        return res.status(400).json({error: "Internal server error"})
    }
}

module.exports = { registerUser, loginUser };
