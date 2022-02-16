const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const collectionSchema = Schema({
  lists: [
    {
      type: Schema.ObjectId,
      ref: "List",
    },
  ],
  name: {
    type: String,
    required: [true, "Please name the collection"],
  },
});

module.exports = model("Collection", collectionSchema);
