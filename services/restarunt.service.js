const { restaruntSchema } = require("../models");

const addrestarunt = (body) => {
  return restaruntSchema.create(body);
};

const getrestarunt = () => {
  return restaruntSchema.find();
};

const deleterestarunt = (id) => {
  return restaruntSchema.findByIdAndDelete(id);
};

const updaterestarunt = (id, body) => {
  return restaruntSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addrestarunt,
  getrestarunt,
  deleterestarunt,
  updaterestarunt,
};
