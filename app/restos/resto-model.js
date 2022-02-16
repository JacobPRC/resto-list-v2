const mongoose = require("mongoose");

const restoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add resto name"],
  },
  notes: String,
  rating: {
    type: Number,
    required: false,
    enum: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
  },
  tried: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Resto", restoSchema);
