const {Driver} = require("../database/models")
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

      const isExisteDriver =   await Driver.findOne({ where: { email }});
      if (isExisteDriver){
        return res.status(401).json("email already exsite")
      }
      if (!isPasswordAlphanumeric(password)){
          return res.status(400).json({message:"password should be Alphanumeric"})
      }

      const hashedPassword = await hashPassword(password)
      const driver = await Driver.create({
        name,
        last_name ,
        password:hashedPassword ,
        email,
        phone,
        vehicule_code,
        cin
      });
      return res.json(driver.id)  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.deleteDriver = async(req,res)=>{
    try {
        const driverID =req.params.id
        Driver.destroy({
            where: {
                id:driverID
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
      const record = await Driver.findByPk(id);
    
      if (record) {
        // Update the record
        await Driver.update({ ...req.body }, {
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
      const records = await Driver.findAll();
              res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };

  module.exports.getDriverCount = async (req, res) => {
    try {
      const records = await Driver.count();
              res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };