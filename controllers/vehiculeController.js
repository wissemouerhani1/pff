const {Vehicule} = require("../database/models")
const {isPasswordAlphanumeric,hashPassword,VerifPassword} = require("../helper/helper")

module.exports.createVehicule= async(req,res)=>{
 try {
      const {
 vehicule_type,
 matricule,
 vehicule_code   
        } = req.body;

      const isExisteVehicule =   await Vehicule.findOne({ where: { matricule}});
      if (isExisteVehicule){
        return res.status(401).json("Vehicule already exist")
      }
      

      const vehicule = await Vehicule.create({
        vehicule_type,
        matricule,
        vehicule_code,
      });
      return res.json(vehicule.id)  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.deleteVehicule = async(req,res)=>{
    try {
        const vehiculeID =req.params.id
        Vehicule.destroy({
            where: {
                id:vehiculeID
            }
        })
         return res.json("vehicule deleted")  
    } catch (error) {
       throw new Error(error)
    }
       
   
   }
   
   
   module.exports.UpdateVehicule = async (req, res) => {
    const { id } = req.params;
       try {
      // Find the record to be updated
      const record = await Vehicule.findByPk(id);
    
      if (record) {
        // Update the record
        await Vehicule.update({ ...req.body }, {
          where: { id }
        });
    
        // Fetch the updated record
    
        res.json("vehicule updated ");
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating record', error });
    }
  };
  

  
  module.exports.getAllVehicule = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await Vehicule.findAll();
          res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };


  module.exports.getAllVehiculeCode = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await Vehicule.findAll();
          res.json(records.map(e=>e.vehicule_code));
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };



  
  module.exports.getVehiculeCount = async (req, res) => {
    try {

      // Fetch all records from the model
      const records = await Vehicule.count();
          res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };