const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
    {
    username :
    {
     type : String,
    }, 
    email :
    {
     type : String,
    },    
    password :
    {
     type : String,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" }     
    }
)

const Auth = mongoose.model("Auth",AuthSchema);

module.exports = Auth;