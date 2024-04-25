const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(data, role) {
  console.log(data, role)
  const expiresIn = "1h";
  const token = jwt.sign({ role:role, email: data.email }, JWT_SECRET, {
    expiresIn,
  }); 
  return token;
}

module.exports = { generateToken };
