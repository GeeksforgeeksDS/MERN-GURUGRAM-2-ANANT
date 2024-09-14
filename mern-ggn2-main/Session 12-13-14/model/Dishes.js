const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  quantity: Number,
  id: Number,
  category: String,
});
const Dishes = mongoose.model("Dishes", dishesSchema);

module.exports = Dishes;
