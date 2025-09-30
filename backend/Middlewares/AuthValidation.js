const Joi = require('joi');

const signValidation = (req,res,next) =>
{
const schema = Joi.object({
username : Joi.string().min(3).max(100).required(),
email : Joi.string().email().required(),
password : Joi.string().min(5).max(100).required() ,
role: Joi.string().valid("user", "admin").default("user")   
});    
const {error} = schema.validate(req.body);
if(error) 
{
 return res.status(400).json({message : "Bad Request",error})   
}
next();
}

const loginValidation = (req,res,next) =>
{
const schema = Joi.object({
email : Joi.string().email().required(),
password : Joi.string().min(5).max(100).required(),
role: Joi.string().valid("user", "admin").default("user")   
});    
const {error} = schema.validate(req.body);
if(error) 
{
 return res.status(400).json({message : "Bad Request",error})   
}
next();
}

module.exports =
{signValidation,
    loginValidation

}