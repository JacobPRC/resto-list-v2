const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const listSchema = Schema({
  restos: [
    {
      type: Schema.ObjectId,
      ref: "Resto",
    },
  ],
  flag: {
    type: String,
    required: true,
    enum: ["wants", "tried"],
  },
});

module.exports = model("List", listSchema);
