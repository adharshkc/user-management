const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  const expiresIn = "1h";
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn,
  }); 
  return token;
}

module.exports = { generateToken };
