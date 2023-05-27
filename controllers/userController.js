const {User,Sequelize} = require("../database/models")

module.exports.getUsers = async(req,res)=> {
const users = await User.findAll();
console.log("Jane's auto-generated ID:", users);
    res.json(users)
}