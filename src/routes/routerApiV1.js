const express = require("express");
require("dotenv").config();
const router = express.Router();
const {
  home,
  getAll,
  getCar,
  postCar,
  deleteCar,
} = require("../controllers/carController");

router.get("/", home);

router.get("/cars", getAll);

router.get("/cars/:carId", getCar);

router.post("/cars", postCar);

router.delete("/cars/:carId", deleteCar);

module.exports = router;
