// Set up express app and all middleware
const express = require("express");
const mongoose = require("mongoose");

const connectMongo = require("./helpers/connect-mongo");

const app = express();

connectMongo();

module.exports = app;
