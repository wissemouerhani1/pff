const courrierRoute = require("express").Router()
const { createCourrier ,UpdateCourrier,deleteCourrier,getAllCourrier} = require("../controllers/courrierController");

courrierRoute.post("/createCourrier",createCourrier);
courrierRoute.get("/getAllCourrier",getAllCourrier);
courrierRoute.put("/updateCourrier/:id",UpdateCourrier);
courrierRoute.delete("/deleteCourrier/:id",deleteCourrier);


module.exports = CourrierRoute;