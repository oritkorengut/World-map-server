const express = require("express");
const cors=require("cors");
const mapRouter = require('./routers/MapRouter');


const app= express()
app.use(cors())
app.use(express.json())
app.use("/map",mapRouter)
  

app.listen(3020, () => {
    console.log("hi we listen to port 3020")
  })
