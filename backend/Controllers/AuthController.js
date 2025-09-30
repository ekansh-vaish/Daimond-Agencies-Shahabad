const Auth = require("../Model/Authentication");
const bcrypt = require("bcrypt")
const Jwt = require("jsonwebtoken");
require("dotenv").config();
const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await Auth.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    const UserModel = new Auth({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      role: role || "user"   // 👈 default user, but can set admin
    });

    await UserModel.save();

    res.status(201).json({ message: "Signup Successfully", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Auth.findOne({ email });

  if (!user) return res.status(403).json({ message: "Auth failed", success: false });

  const isPassEqual = await bcrypt.compare(password, user.password);
  if (!isPassEqual) return res.status(403).json({ message: "Auth failed", success: false });

  const Jwttoken = Jwt.sign(
    { email: user.email, _id: user.id, role: user.role }, // 👈 role bhi add
    process.env.jwtKey,
    { expiresIn: "2h" }
  );

  res.status(201).json({
    message: "Login Successfully",
    success: true,
    Jwttoken,
    email,
    username: user.username,
    role: user.role
  });
};

module.exports = 
{
signup,
login
}