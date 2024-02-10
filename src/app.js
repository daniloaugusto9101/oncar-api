const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const routerAPI1 = require("./routes/routerApiV1");
const END_POINT_V1 = process.env.END_POINT_V1;

app.use(cors());
app.use(express.json());

app.use(END_POINT_V1, routerAPI1);

module.exports = app;
