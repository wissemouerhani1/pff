const courrierRoute = require("express").Router()
const { UpdateCourrier,createCourrier,deleteCourrier,getAllCourrier,getCourrierCount} = require("../controllers/courrierController");

courrierRoute.post("/createCourrier",createCourrier);
courrierRoute.get("/getAllCourrier",getAllCourrier);
courrierRoute.get("/getCourrierCount",getCourrierCount);
courrierRoute.put("/updateCourrier/:id",UpdateCourrier);
courrierRoute.delete("/deleteCourrier/:id",deleteCourrier);


module.exports = courrierRoute;