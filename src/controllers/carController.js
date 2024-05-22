// const userModel = require("../models/carModel");

const knexConfig = require("../models/knexfile");
const coonect = require("knex")(knexConfig);

const home = (req, res) => {
  return res.status(200).json({
    message: "Welcome",
    author: "Danilo Augusto|Rafael Lucas",
    version: "API V1",
    endpoint: "/api/v1/cars",
  });
};

const getAll = (req, res) => {
  const cars = coonect("carros")
    .select()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      // console.log(err);
      res
        .status(200)
        .json({ message: `Erro ao obter os carros: ${err.message}` });
    });
  return cars;
};

const getCar = (req, res) => {
  const { carId } = req.params;
  const cars = coonect("carros")
    .where("id", carId)
    .then((dados) => {
      if (dados.length > 0) {
        res.status(200).json({
          message: "Carro obtido com sucesso",
          data: dados[0],
        });
      } else {
        res.status(404).json({
          message: "Carro não encontrado",
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Erro ao procurar o carro: ${err.message}` });
    });
  return cars;
};

const postCar = (req, res) => {
  const cars = coonect("carros")
    .insert(req.body)
    .then(() => {
      res.status(201).json({
        message: "Produto adicionado com sucesso",
      });
    })
    .catch((err) => {
      res
        .status(401)
        .json({ message: `Erro ao obter os carros: ${err.message}` });
    });
  return cars;
};

const deleteCar = (req, res) => {
  const { carId } = req.params;
  const cars = coonect("carros")
    .where("id", carId)
    .del()
    .then(() => {
      res.status(200).json({ message: `Carro excluido com sucesso` });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Erro ao excluir o carro: ${err.message}` });
    });
  return cars;
};

const updateCar = (req, res) => {
  const { carId } = req.params;
  const carData = req.body;

  const cars = coonect("carros")
    .where("id", carId)
    .update(carData)
    .then((count) => {
      console.log(`Número de carros atualizados: ${count}`);
      if (count > 0) {
        res.status(200).json({ message: "Carro atualizado com sucesso" });
      } else {
        res.status(404).json({ message: "Carro não encontrado" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: `Erro ao atualizar o carro: ${err.message}` });
    });
  return cars;
};


module.exports = {
  home,
  getAll,
  getCar,
  postCar,
  deleteCar,
  updateCar,
};
