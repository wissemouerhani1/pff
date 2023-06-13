const employerRoute = require("express").Router()
const { createEmploye,UpdateEmploye,deleteEmploye,getAllEmploye} = require("../controllers/employecontroller");

employerRoute.post("/createEmploye",createEmploye);
employerRoute.get("/getAllEmploye",getAllEmploye);
employerRoute.put("/updateEmploye/:id",UpdateEmploye);
employerRoute.delete("/deleteEmploye/:id",deleteEmploye);


module.exports = employerRoute;