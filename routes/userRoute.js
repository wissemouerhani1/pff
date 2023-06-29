const userRoute = require("express").Router()

const { getUsers,signUp,signIn,CreateEmploye } = require("../controllers/userController");
userRoute.get("/",getUsers);

userRoute.post("/sign-up",signUp);
userRoute.post("/sign-in",signIn);
userRoute.post("/createEmploye",CreateEmploye);

module.exports = userRoute;