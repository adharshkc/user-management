const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(data, role) {
  console.log(data, role)
  const token = jwt.sign({ role:role, email: data.email }, JWT_SECRET, {
    expiresIn:'1h',
  }); 
  return token;
}

module.exports = { generateToken };
