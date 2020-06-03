const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  uid: String,
  orders: [
    { cartId:String,
      hotelId: String,
      name: String,
      city: String,
      price: Number,
      ratings: String,
      visits: String,
      completedBookings: String,
      draftBookings: String,
      tags: String,
      description: String,
      imageUrl: String,
    },
  ],
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
