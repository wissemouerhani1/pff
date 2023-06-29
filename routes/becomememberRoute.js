const becomememberRoute = require("express").Router()
const { UpdateBecomeMember,createBecomeMember,deleteBecomeMember,getAllBecomeMember,getBecomeMemberCount} = require("../controllers/becomememberController");

becomememberRoute.post("/createBecomeMember",createBecomeMember);
becomememberRoute.get("/getAllBecomeMember",getAllBecomeMember);

becomememberRoute.put("/updateBecomeMember/:id",UpdateBecomeMember);
becomememberRoute.delete("/deleteBecomeMember/:id",deleteBecomeMember);


module.exports = becomememberRoute;