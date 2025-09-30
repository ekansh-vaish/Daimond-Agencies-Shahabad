const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
{
Productname : 
{
type : String,
required : true,
},
description :
{
type : String,
required : true,

},
size : 
{
type : String,
required : true,

},
price :
{
type : Number,  
required : true,

},
image: 
{
type: String,

}

}
)

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;
