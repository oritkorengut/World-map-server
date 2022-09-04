
const express = require("express");
const fs = require("fs");
const app= express()
const cors=require("cors");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}));

const mapRouter = require('./Routers/MapRouter');

app.use("/map",mapRouter)
  
const point = [{"point":0,
"point":1,
"point":2
}]   



// fs.writeFile("coordinates.json", JSON.stringify(point), "utf8", ()=>{});
app.listen(3020, () => {
    console.log("hi we listen to port 3020")
  })
