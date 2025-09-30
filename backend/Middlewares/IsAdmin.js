const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access Denied, Admin only" });
  }
  next();
};

module.exports  = isAdmin;