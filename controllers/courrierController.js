const { courrier } = require("../database/models")
const { v4: uuidv4 } = require('uuid');

module.exports.createCourrier = async (req, res) => {
  try {
    const courrier = await courrier.create({
      ...req.body,
      courrierid: uuidv4()
    });
    return res.json("courrier created")
  } catch (error) {
    throw new Error(error)
  }


}

module.exports.deleteCourrier = async (req, res) => {
  try {
   await courrier.destroy({
      where: {
        id: req.params.id
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
    const record = await courrier.findByPk(id);

    if (record) {
      // Update the record
      await courrier.update({ ...req.body }, {
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
    const records = await courrier.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving records', error });
  }
};




module.exports.getCourrierCount = async (req, res) => {
  try {
    const records = await courrier.count();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving records', error });
  }
};