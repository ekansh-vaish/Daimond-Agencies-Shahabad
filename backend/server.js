const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const createError = require("./utils/ExpressError");
const ProductRoute = require("./Routes/product");
const session = require("express-session");
const flash = require("connect-flash");
const PaymentRoute = require("./Routes/PaymentRouter");
const AuthRoute = require("./Routes/AuthRouter");
const dbURL = process.env.ATLASDB_URL;
const PORT = process.env.PORT || 8080;

// const path = require("path");
require("dotenv").config();


const main = async () => {
await mongoose.connect(dbURL);  
}


const sessionOptions  =
{
secret : "mysupersecretcode",
resave : false,
saveUninialized : true,   
cookie : 
{
expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
maxAge : 7 * 24 * 60 * 60 * 1000,
httpOnly : true
}
}

app.use(session(sessionOptions));
app.use(flash());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
  credentials: true
}));


app.use((req,res,next) =>
{
res.locals.success = req.flash("success");
res.locals.error = req.flash("error");
next();    
});
app.use("/",ProductRoute);

app.use("/",PaymentRoute);
app.use("/",AuthRoute)
app.use("/uploads", express.static("uploads"));

main().then(() =>
{
console.log("Connected Database");
})
.catch((err) =>
{
console.log(err); 
})




app.use((req,res,next) =>
{
const error = createError(404,`Route ${req.originalUrl} not found`)
next(error);  
});

app.use((err, req, res, next) => {
const status = err.statusCode || 500;
const message = err.message || "Something went wrong";
res.status(status).json({ error: message });
});


const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});





app.listen(PORT, () =>
{
console.log("server is listening");

})
