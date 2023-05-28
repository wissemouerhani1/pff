
const express = require('express')
const cors =require("cors")
require('dotenv').config()
const userRoute =  require("./routes/userRoute") 
  const app = express()
  
  const port = 3333
  app.use(cors())
  app.use(express.json())  
  app.use("/",userRoute);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


