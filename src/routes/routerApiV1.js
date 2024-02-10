const express = require("express");
require("dotenv").config();
const router = express.Router();
const {
  home,
  getAll,
  postCar,
  deleteCar,
} = require("../controllers/carController");

router.get("/", home);

router.get("/cars", getAll);

router.post("/cars", postCar);

router.delete("/cars/:carId", deleteCar);

module.exports = router;
