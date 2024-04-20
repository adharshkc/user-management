const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET


function generateToken(user){
    const token = jwt.sign({id: user._id, email: user.email}, JWT_SECRET)// give time to token
    return token;
}

module.exports = {generateToken}