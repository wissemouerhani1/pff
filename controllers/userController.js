const {User,Sequelize} = require("../database/models")
const {isPasswordAlphanumeric,hashPassword,VerifPassword} = require("../helper/helper")
module.exports.getUsers = async(req,res)=> {
const users = await User.findAll();
return     res.json(users)
}

module.exports.signUp = async(req,res)=>{
 try {
      const {
        name,
        last_name ,
        password ,
        email,
        phone,
        cin
      } = req.body;

      const isExisteUser =   await User.findOne({ where: { email }});
      if (isExisteUser){
        return res.status(401).json("email already exsite")
      }
      if (!isPasswordAlphanumeric(password)){
          return res.status(400).json({message:"password should be Alphanumeric"})
      }

      const hashedPassword = await hashPassword(password)
      const user = await User.create({
        name,
        last_name ,
        password:hashedPassword ,
        email,
        phone,
        cin,
        role:'admin'
      });
      return res.json(user.id)  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.signIn = async (req,res)=>{
    try {
        const { 
            email,
            password,
          } = req.body;
        
          const user =   await User.findOne({ where: { email }});
          if (!user) {
            return res.status(404).json({message:"user not found"})
          }

          const hash = user.password;
          if (! await VerifPassword(password,hash)){
            return res.status(401).json({message:"Unauthorized"})
          }
          return res.status(200).json(user)
    } catch (error) {
            console.log(error)
    }
}




module.exports.CreateEmploye= async(req,res)=> {
  const users = await User.findAll();
  return   res.json(users)
  }
  