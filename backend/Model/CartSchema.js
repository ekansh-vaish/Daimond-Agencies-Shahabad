const { ref, required } = require("joi");
const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({

productId : 
{
type : mongoose.Schema.Types.ObjectId,
ref : "Product",
},
Productname : 
{
type : String,   

},
price : 
{
type : Number, 

},  
 
})

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;