const jwt = require("jsonwebtoken")

const userAuth = function(req, res, next){
    const bearerToken = req.headers.authorization;
    if(!bearerToken){
        return res.json({error: "token not found"})
    }else{
        const token = bearerToken.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                // console.log("error")
               return res.status(401).json({error: "Invalid token"})
            }
            req.user = decoded;
            next()
        })
    }
}

module.exports = userAuth;