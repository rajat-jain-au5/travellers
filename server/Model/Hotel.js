const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Blogs = require("./Blog");
var hotelSchema = new Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  url: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  content: {
    type: String,
  },
  content: {
    type: String,
  },
  content: {
    type: String,
  },
  geo: { lat: mongoose.Types.Decimal128, lon: mongoose.Types.Decimal128 },
  type: {
    type: String,
  },
  id: {
    type: Number,
  },
});
const Hotel = mongoose.model("hotels", hotelSchema);
module.exports = Hotel;
