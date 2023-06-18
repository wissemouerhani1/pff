const customerRoute = require("express").Router()
const { createCustomer,UpdateCustomer,deleteCustomer,getAllCustomer,getCustomerCount} = require("../controllers/customerController");

customerRoute.post("/createCustomer",createCustomer);
customerRoute.get("/getAllCustomer",getAllCustomer);    
customerRoute.get("/getCustomerCount",getCustomerCount);
customerRoute.put("/updateCustomer/:id",UpdateCustomer);
customerRoute.delete("/deleteCustomer/:id",deleteCustomer);
module.exports = customerRoute;