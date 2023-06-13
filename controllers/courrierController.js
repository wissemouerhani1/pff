const {User} = require("../database/models")
const {isPasswordAlphanumeric,hashPassword,VerifPassword} = require("../helper/helper")

module.exports.createEmploye = async(req,res)=>{
 try {
      const {
        courrierID,
        name,
        last_name ,
        gouvernerat,
        adresse,
        phone,
        type,
        prix
      } = req.body;

      const isExisteUser =   await User.findOne({ where: { email }});
      if (isExisteUser){
        return res.status(401).json("email already exsite")
      }
      if (!isPasswordAlphanumeric(password)){
          return res.status(400).json({message:"password should be Alphanumeric"})
      }
      const user = await User.create({

      courrierID,
      name,
      last_name ,
      gouvernerat,
      adresse,
      phone,
      type,
      prix,
     role:'courrier'
      });
      return res.json(user.id)  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.deleteCourrier = async(req,res)=>{
    try {
        const userID =req.params.id
        User.destroy({
            where: {
                id:userID
            }
        })
         return res.json("Courrier deleted")  
    } catch (error) {
       throw new Error(error)
    }
       
   
   }
   
   
   module.exports.UpdateCourrier = async (req, res) => {
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
    
        res.json("Courrier updated ");
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating record', error });
    }
  };
  

  
  module.exports.getAllCourrier = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await User.findAll({
        where:{role:"courrier"}
      });
          res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };