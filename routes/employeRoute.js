const employeRoute = require("express").Router()
const { createEmploye,UpdateEmploye,deleteEmploye,getAllEmploye} = require("../controllers/employecontroller");

employeRoute.post("/createEmploye",createEmploye);
employeRoute.get("/getAllEmploye",getAllEmploye);
employeRoute.put("/updateEmploye/:id",UpdateEmploye);
employeRoute.delete("/deleteEmploye/:id",deleteEmploye);


module.exports = employeRoute;