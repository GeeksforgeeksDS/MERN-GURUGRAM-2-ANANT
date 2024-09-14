const express = require("express");

const router = express.Router();

const {
  getDishes,
  getSingleDish,
  createDish,
} = require("../controllers/foodController");

router.get("/dishes", getDishes);
router.get("/dishes/:id", getSingleDish);
router.post("/dishes", createDish);

module.exports = router;
