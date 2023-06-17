const vehiculeRoute = require("express").Router()
const { createVehicule,UpdateVehicule,deleteVehicule,getAllVehicule,getAllVehiculeCode,getVehiculeCount} = require("../controllers/vehiculeController");

vehiculeRoute.post("/createVehicule",createVehicule);
vehiculeRoute.get("/getAllVehicule",getAllVehicule);
vehiculeRoute.get("/getVehiculeCount",getVehiculeCount);
vehiculeRoute.get("/getAllVehiculeCode",getAllVehiculeCode);
vehiculeRoute.put("/updateVehicule/:id",UpdateVehicule);
vehiculeRoute.delete("/deleteVehicule/:id",deleteVehicule);


module.exports = vehiculeRoute;