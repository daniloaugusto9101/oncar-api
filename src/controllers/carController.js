// const userModel = require("../models/carModel");

const knexConfig = require("../models/knexfile");
const coonect = require("knex")(knexConfig);

const home = (req, res) => {
  return res.status(200).json({
    message: "Welcome",
    author: "Danilo Augusto",
    version: "API V1",
    endpoint: "/api/v1/cars",
  });
};

const getAll = (req, res) => {
  const cars = coonect("carros")
    .select()
    .then((resp) => {
      res.status(200).json({
        message: "Carros obtidos com sucesso",
        data: resp,
      });
    })
    .catch((err) => {
      // console.log(err);
      res.json({ message: `Erro ao obter os carros: ${err.message}` });
    });
  return cars;
};

const postCar = (req, res) => {
  const body = req.body;
  car = userModel.getAll();
  if (!body) {
    return res.status(400).end();
  } else {
    car.push(body);
    return res.status(201).json(body);
  }
};

const deleteCar = (req, res) => {
  const id = req.params.id;
  car = userModel.getAll();
  let newDB = car.filter((item) => {
    return item.id !== id;
  });
  car = newDB;
  res.send(newDB);
};

module.exports = {
  home,
  getAll,
  postCar,
  deleteCar,
};
