const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review"
  }]
});

module.exports = mongoose.model("Service", serviceSchema);
