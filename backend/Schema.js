const Joi = require('joi');
const Product = require('./Model/product');

module.exports.ProductSchema =Joi.object({
     Product : Joi.object({
    Productname : Joi.string().required(),
    description : Joi.string().required(),
    size : Joi.string().required(),
    price : Joi.number().required().min(0)
})

});