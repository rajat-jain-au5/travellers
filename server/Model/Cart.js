const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  uid: String,
  hotels: [
    {
      hotelId: String,
      name: String,
      city: String,
      price:Number,
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

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;
