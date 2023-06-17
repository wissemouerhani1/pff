const driverRoute = require("express").Router()
const { createDriver,UpdateDriver,deleteDriver,getAllDriver,getDriverCount} = require("../controllers/driverController");

driverRoute.post("/createDriver",createDriver);
driverRoute.get("/getAllDriver",getAllDriver);
driverRoute.get("/getDriverCount",getDriverCount);
driverRoute.put("/updateDriver/:id",UpdateDriver);
driverRoute.delete("/deleteDriver/:id",deleteDriver);


module.exports = driverRoute; 