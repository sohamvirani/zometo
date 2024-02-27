const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const menuRoute = require("./menu.route");
const restaruntRoute = require("./restarunt.route");
const paymentRoute = require("./payment.route");
const orderRoute = require("./order.route");

route.use("/user", userRoute);
route.use("/menu", menuRoute);
route.use("/restarunt", restaruntRoute);
route.use("/payment", paymentRoute);
route.use("/order", orderRoute);

module.exports = route;
