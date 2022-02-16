// Set up express app and all middleware
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

mongoose.connect(config.mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Connected successfully", db.host));

module.exports = app;
