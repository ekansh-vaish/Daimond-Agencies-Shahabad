const Product = require("../Model/product");
const createError = require("../utils/ExpressError");

module.exports.index = async (req, res) => {



const { Productname, description, size, price } = req.body;
console.log("File:", req.file);
console.log("Body:", req.body);
const result = new Product({
Productname,
description,
size,
price,
image: req.file.path   // ✅ yahan req.file use karo
});

const saved = await result.save();
req.flash("success","New Listing Created!");
res.json(saved);

}

module.exports.renderProduct = async(req,res) =>
{
let result = await Product.find();
if(result.length > 0)
{
res.send(result)  
}
else
{
res.send("no product found");
}
}

module.exports.removeProduct = async (req,res) =>
{
let result = await Product.deleteOne({_id:req.params.id})
console.log(result);
res.send(result)
}

module.exports.editProduct =async(req,res) =>
{
let result = await Product.updateOne({_id:req.params.id},
{
$set : req.body  
}
)
res.send(result)
}

module.exports.searchProduct = async (req,res) =>
{
let data = await Product.find(
{
"$or" :[
{Productname:{$regex:req.params.key}},
]  
}
)
res.send(data);
}
