const userRoute = require("express").Router()
const { getUsers } = require("../controllers/userController");
userRoute.get("/",getUsers);

module.exports = userRoute;