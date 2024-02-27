const express = require("express");
const validate = require("../middlewares/validate");
const { restaruntController } = require("../controllers");
const restaruntValidation = require("../validations/restarunt.validate")
const route = express.Router();

route.get("/get", restaruntController.getrestarunt);
route.post("/add", validate(restaruntValidation.addrestarunt), restaruntController.addrestarunt);
route.put(
  "/update/:id",
  validate(restaruntValidation.addrestarunt),
  restaruntController.updaterestarunt
);
route.delete(
  "/delete/:id",
  validate(restaruntValidation.addrestarunt),
  restaruntController.deleterestarunt
);

module.exports = route;