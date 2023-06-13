const {User} = require("../database/models")
const {isPasswordAlphanumeric,hashPassword,VerifPassword} = require("../helper/helper")

module.exports.createDriver = async(req,res)=>{
 try {
      const {
        name,
        last_name ,
        password ,
        email,
        vehicule_code,
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
        vehicule_code,
        cin,
        role:'employe'
      });
      return res.json(user.id)  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.deleteDriver = async(req,res)=>{
    try {
        const userID =req.params.id
        User.destroy({
            where: {
                id:userID
            }
        })
         return res.json("Driver deleted")  
    } catch (error) {
       throw new Error(error)
    }
       
   
   }
   
   
   module.exports.UpdateDriver = async (req, res) => {
    const { id } = req.params;
       try {
      // Find the record to be updated
      const record = await User.findByPk(id);
    
      if (record) {
        // Update the record
        await ModelName.update({ ...req.body }, {
          where: { id }
        });
    
        // Fetch the updated record
    
        res.json("user updated ");
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating record', error });
    }
  };
  

  
  module.exports.getAllDriver = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await User.findAll({
        where:{role:"employe"}
      });
              res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };