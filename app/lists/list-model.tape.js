const test = require("tape");
const mongoose = require("mongoose");
const list = require("./list-model");
const connectMongo = require("../helpers/connect-mongo");

test("list.find({}) should return an array", async function (t) {
  connectMongo();
  const lists = await list.find({});
  const result = Array.isArray(lists);
  const expected = true;
  t.deepEqual(result, expected);
  t.end();
  mongoose.disconnect();
});
