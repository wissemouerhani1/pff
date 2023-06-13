const driverRoute = require("express").Router()
const { createDriver,UpdateDriver,deleteDriver,getAllDriver} = require("../controllers/driverController");

driverRoute.post("/createDriver",createDriver);
driverRoute.get("/getAllDriver",getAllDriver);
driverRoute.put("/updateDriver/:id",UpdateDriver);
driverRoute.delete("/deleteDriver/:id",deleteDriver);


module.exports = driverRoute; 