const jwt = require("jsonwebtoken");

const   adminAuth = function (req, res, next) {
  console.log(req.headers)
  const bearerToken = req.headers.authorization;
  console.log("bearer token",bearerToken)
  if (!bearerToken) {
    console.log("no");
    return res.json({ error: "token not found" });
  } else {
    const token = bearerToken.split(" ")[1];
    console.log("token",token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role === "admin") {
        next();
      } else {
        return res.status(401).json({ error: "Unauthorized access" });
      }
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};




module.exports = adminAuth;
