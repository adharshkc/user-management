const jwt = require("jsonwebtoken")

const userAuth = function(req, res, next){
    const token = req.headers.authorization;
    if(!token){
        res.json({error: "token not found"})
    }else{
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                res.json({error: "invalid token"})
            }
            req.user = decoded;
            next()
        })
    }
}

module.exports = userAuth;