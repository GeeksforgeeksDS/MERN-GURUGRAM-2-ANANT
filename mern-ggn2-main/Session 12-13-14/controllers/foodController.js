const Dishes = require("../model/Dishes");

const getDishes = async (req, res) => {
  return res.send(await Dishes.find());
};

const getSingleDish = async (req, res) => {
  console.log(req.params.id);
  // return those dishes
  return res.send(await Dishes.find({ id: req.params.id }));
};

const createDish = async (req, res) => {
  console.log(req.body);
  const newDish = new Dishes(req.body);
  newDish.save().then(() => console.log("saved"));
  return res.send("saved");
};

module.exports = {
  getDishes,
  getSingleDish,
  createDish,
};
