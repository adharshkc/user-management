const jwt = require("jsonwebtoken");

const userAuth = function (req, res, next) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    console.log("no");
    return res.json({ error: "token not found" });
  } else {
    const token = bearerToken.split(" ")[1];
    console.log(token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role === "user") {
        next();
      } else {
        return res.status(401).json({ error: "Unauthorized access" });
      }
    } catch (error) {
      console.log("error",error);
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};




module.exports = userAuth;
