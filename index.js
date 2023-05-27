
const express = require('express')
require('dotenv').config()
const userRoute =  require("./routes/userRoute") 
  const app = express()
  const port = 3333
  app.use(express.json())  
  app.use("/",userRoute);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


