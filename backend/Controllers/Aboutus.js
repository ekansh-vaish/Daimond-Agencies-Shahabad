
const AboutUs = require("../Model/AboutUs");

module.exports.Contactus = async (req, res) => {
  try {
    const response = new AboutUs(req.body);
    const saved = await response.save();
    res.status(201).json({ message: "Complaint submitted successfully", data: saved });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err.message });
  }
  
}