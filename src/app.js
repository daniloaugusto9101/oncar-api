const express = require("express");
const router = require("./routes/routerApiV1");

const app = express();
app.use(express.json());
app.use(router);

module.exports = app;
