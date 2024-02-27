const    orderSchema  = require("../models/order.model");

const addOrder = (body) => {
  return orderSchema.create(body);
};
const getOrder = () => {
  return orderSchema
    .find()
    .populate("user", { firstName: 1, contactNumber: 1 })
    .populate("menu", { itemName: 1, price: 1 })
    .populate("restaurant", { restaurantName: 1, location: 1 });
};

const deleteOrder = () => {
  return orderSchema.findByIdAndDelete();
};
const updateOrder = () => {
  return orderSchema.findByIdAndUpdate();
};

module.exports = {
  addOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
