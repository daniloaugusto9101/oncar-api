const express = require("express");
const app = express();
require("dotenv").config();

const routerAPI1 = require("./routes/routerApiV1");
const END_POINT_V1 = process.env.END_POINT_V1;

app.use(express.json());

app.use(END_POINT_V1, routerAPI1);

module.exports = app;
