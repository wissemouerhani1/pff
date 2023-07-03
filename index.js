
const express = require('express')
const cors =require("cors")
require('dotenv').config()
const userRoute =  require("./routes/userRoute") 
const employeRoute = require('./routes/employeRoute')
const customerRoute = require("./routes/customerRoute")
const vehiculeRoute = require("./routes/vehiculeRoutes")
const driverRoute = require("./routes/driverRoutes")
const CourrierRoute = require("./routes/courrierRoute")
const becomememberRoute = require("./routes/becomememberRoute")
  const app = express()
  
  const port = 3333
  app.use(cors())
  app.use(express.json())  
  app.use("/",userRoute);
  app.use("/employe",employeRoute);
  app.use("/customer",customerRoute);
  app.use("/vehicule",vehiculeRoute);
  app.use("/driver",driverRoute);
  app.use("/courrier",CourrierRoute);
  app.use("/becomemember", becomememberRoute);



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


