
const deliverystatueRoute = require("express").Router()
const {getAllDeliverystatue} = require("../controllers/deliverystatueController");


deliverystatueRoute.get("/getAllDeliverystatue",getAllDeliverystatue);    


module.exports = deliverystatueRoute;