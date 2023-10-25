const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  college: {
    type: String,
  },
  year: {
    type: Number,
    required: true,
  },
  scholar_no: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
});

const Buyer = mongoose.model("buyer", buyerSchema);

module.exports = Buyer;
