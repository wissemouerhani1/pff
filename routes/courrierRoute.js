const courrierRoute = require("express").Router()
const { UpdateCourrier,createCourrier,deleteCourrier,getAllCourrier,getCourrierCount,updateStaus,getAllReturnedCourrier} = require("../controllers/courrierController");

courrierRoute.post("/createCourrier",createCourrier);
courrierRoute.get("/getAllCourrier",getAllCourrier);
courrierRoute.get("/getAllReturnPackages",getAllReturnedCourrier);
courrierRoute.get("/getCourrierCount",getCourrierCount);
courrierRoute.put("/updateCourrier/:id",UpdateCourrier);
courrierRoute.put("/updateStatus/:id",updateStaus);
courrierRoute.delete("/deleteCourrier/:id",deleteCourrier);
module.exports = courrierRoute;