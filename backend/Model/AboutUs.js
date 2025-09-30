const mongoose = require("mongoose");

const AboutUsSchema = new mongoose.Schema({
  Name : {
    type: String,
  },
  Email : {
    type: String,
  },
  Message : {
    type: String,
  }
});

const AboutUs = mongoose.model('AboutUs', AboutUsSchema);
module.exports = AboutUs;
