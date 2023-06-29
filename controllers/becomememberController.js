const {BecomeMember} = require("../database/models")

module.exports.createBecomeMember = async(req,res)=>{
 try {
      const {
        name,
        last_name ,
        cin,
        adresse,
        email,
        phone,
        business_name
        
      } = req.body;

      const isExisteBecomeMember =   await BecomeMember.findOne({ where: { email }});
      if (isExisteBecomeMember){
        return res.status(401).json("email already exsite")
      }
      

      
      const becomemember = await BecomeMember.create({
        name,
        last_name ,
        cin,
        adresse,
        email,
        phone,
        business_name
      });
      return res.json(becomemember.id)  
 } catch (error) {
    throw new Error(error)
 }
    

}

module.exports.deleteBecomeMember = async (req, res) => {
    try {
      const becomeMemberID = req.params.id;
      await BecomeMember.destroy({
        where: {
          id: becomeMemberID,
        },
      });
      return res.json("Member deleted");
    } catch (error) {
      throw new Error(error);
    }
  };
  
   
   
   module.exports.UpdateBecomeMember = async (req, res) => {
    const { id } = req.params;
       try {
      // Find the record to be updated
      const record = await BecomeMember.findByPk(id);
    
      if (record) {
        // Update the record
        await BecomeMember.update({ ...req.body }, {
          where: { id }
        });
    
        // Fetch the updated record
    
        res.json("Member updated ");
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating record', error });
    }
  };
  

  
  module.exports.getAllBecomeMember = async (req, res) => {
    try {
      const records = await BecomeMember.findAll();
              res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records', error });
    }
  };

  