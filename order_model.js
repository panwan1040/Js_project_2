var mongoose = require("mongoose");

var order_schema = mongoose.Schema(
  {
    orders: {
      type: String,
    },

    user: {
      type: String,
    },
    comment: {
      type: String,
    },
    contact: {
      type: String,
    },

    price: {
      type: String,
    },
  },
  {
    collection: "orders",
  }
);

var Order = mongoose.model("orders", order_schema);
module.exports = Order;
