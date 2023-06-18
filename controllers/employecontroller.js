const {employe} = require("../database/models")
const {isPasswordAlphanumeric,hashPassword,VerifPassword} = require("../helper/helper")


module.exports.createEmploye = async (req, res) => {
  try {
    const {
      name,
      last_name ,
      password ,
      email,
      phone,
      cin
    } = req.body;

    const isExisteEmploye =   await employe.findOne({ where: { email }});
    if (isExisteEmploye){
      return res.status(401).json("email already exist")
    }

    if (!isPasswordAlphanumeric(password)){
      return res.status(400).json({message:"password should be Alphanumeric"})
  }
  const hashedPassword = await hashPassword(password)
  const employeCreated = await employe.create({
    name,
    last_name ,
    password:hashedPassword ,
    email,
    phone,
    cin,

  });
  return res.json("employe create ")
  
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving records', error });
  }
};

module.exports.createEmploye1 = async(req,res)=>{
 try {
      const {
        name,
        last_name ,
        password ,
        email,
        phone,
        cin
      } = req.body;

      const isExisteEmploye =   await employe.findOne({ where: { email }});
      return console.log(isExisteEmploye)
  
      if (isExisteEmploye){
        return res.status(401).json("email already exist")
      }
      if (!isPasswordAlphanumeric(password)){
          return res.status(400).json({message:"password should be Alphanumeric"})
      }

      const hashedPassword = await hashPassword(password)
      const employe = await employe.create({
        name,
        last_name ,
        password:hashedPassword ,
        email,
        phone,
        cin,

      });
      return res.json("employe create ")  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.deleteEmploye = async(req,res)=>{
    try {
        const employeID =req.params.id
        employe.destroy({
            where: {
                id:employeID
            }
        })
         return res.json("employe deleted")  
    } catch (error) {
       throw new Error(error)
    }
       
   
   }
   
   
   module.exports.UpdateEmploye = async (req, res) => {
    const { id } = req.params;
       try {
      // Find the record to be updated
      const record = await employe.findByPk(id);
    
      if (record) {
        // Update the record
        await employe.update({ ...req.body }, {
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
  

  
  module.exports.getAllEmploye = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await employe.findAll();
          res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };
  module.exports.getEmployeCount = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await employe.count();
          res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };