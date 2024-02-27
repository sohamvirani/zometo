const mongoose = require("mongoose");

const restaruntSchema = new mongoose.Schema({
  restaruntName: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  charges: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const restarunt = mongoose.model("restaruntSchema", restaruntSchema);
module.exports = restarunt;
