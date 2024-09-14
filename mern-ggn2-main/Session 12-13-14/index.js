const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/food-app");
}
connectToDB().catch((err) => console.log(err));

const dishes = require("./routes/foodRoutes");
app.use(express.json());
app.use("/food", dishes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
