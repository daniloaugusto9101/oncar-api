const express = require("express");
const router = express.Router();

let db = [
  {
    id: "1",
    img: "",
    modelo: "Cruze LT Sedan",
    marca: "Chevolet",
    ano: "2022/2022",
    totKM: "55.000",
    preco: "44.990",
  },
  {
    id: "2",
    img: "",
    modelo: "Focus LT Sedan",
    marca: "Chevolet",
    ano: "2020/2020",
    totKM: "40.000",
    preco: "44.990",
  },
  {
    id: "3",
    img: "",
    modelo: "Focus LT Sedan",
    marca: "Chevolet",
    ano: "2020/2020",
    totKM: "40.000",
    preco: "44.990",
  },
  {
    id: "4",
    img: "",
    modelo: "Focus LT Sedan",
    marca: "Chevolet",
    ano: "2020/2020",
    totKM: "40.000",
    preco: "60.990",
  },
  {
    id: "5",
    img: "",
    modelo: "Focus LT Sedan",
    marca: "Chevolet",
    ano: "2020/2020",
    totKM: "40.000",
    preco: "21.990",
  },
  {
    id: "6",
    img: "",
    modelo: "Focus LT Sedan",
    marca: "Chevolet",
    ano: "2020/2020",
    totKM: "40.000",
    preco: "44.990",
  },
];

router.get("/", (req, res) => {
  res.status(200).send("Benv indo a API");
});

router.get("/cars", (req, res) => {
  res.status(200).json(db);
});

router.post("/car", (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).end();
  } else {
    db.push(body);
    return res.status(201).json(body);
  }
});

// Verificar, nao deleta
router.delete("/car/:id", (req, res) => {
  const id = req.params.id;
  let newDB = db.filter((item) => {
    if (item[id]) {
      return item;
    }
  });
  db = newDB;
  res.send(newDB);
});

module.exports = router;
