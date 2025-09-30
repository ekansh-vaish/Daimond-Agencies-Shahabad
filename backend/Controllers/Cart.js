const Product = require("../Model/product");
const createError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const Cart = require('../Model/CartSchema');


module.exports.AddCart = async (req, res) => {

const productId = req.params.id;
const product = await Product.findById(productId);
res.send(product)
createError(500,"NO cart added")
}

module.exports.BuyProduct = async(req,res) =>
{
try{
const cart =  new Cart(req.body);
const saveData = await cart.save();
res.send(saveData);
}
catch(err)
{
console.log(err);

}  
}

module.exports.DeleteItem = async (req,res)=>
{
    try{
const productId = req.params.id;
const item = await Cart.findByIdAndDelete(productId);
res.send(item);
    }catch(err)
    {
        console.log(err);
        
    }
}