const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Benvido a API")
})

app.listen(3333, ()=>{
    console.log("Api iniciada");
});