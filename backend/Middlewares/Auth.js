const jwt = require("jsonwebtoken");
const jwtKey = "ekanshPrivate";

const ensureAuthenticated = (req,res,next) =>
{
const auth = req.headers['authorization'];
if(!auth)
    {
    return res.status(403)
    .json({message : "Unauthorized,JWt token is require"});    
    }    
    try {
     const decoded = jwt.verify(auth,jwtKey);
     req.user = decoded;
     next();   
    } catch (error) {
     return res.status(403)
     .json({message : 'Unauhorized,JWT token wrong or expired'})   
    }
}
module.exports =  ensureAuthenticated;