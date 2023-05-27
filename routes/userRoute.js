const userRoute = require("express").Router()
const { getUsers ,signUp,signIn} = require("../controllers/userController");
userRoute.get("/",getUsers);
userRoute.post("/sign-up",signUp);
userRoute.post("/sign-in",signIn);

module.exports = userRoute;