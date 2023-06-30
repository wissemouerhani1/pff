const { courrier } = require("../database/models");
const { v4: uuidv4 } = require('uuid');

module.exports.createCourrier = async (req, res) => {
  try {
    const newCourrier = await courrier.create({
      ...req.body,
      courrierid: uuidv4()
    });
    return res.json(newCourrier);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating courrier' });
  }
};

module.exports.deleteCourrier = async (req, res) => {
  const { id } = req.params;
  try {
    await courrier.destroy({
      where: { id }
    });
    return res.json({ message: 'Courrier deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting courrier' });
  }
};

module.exports.UpdateCourrier = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await courrier.findByPk(id);

    if (record) {
      await courrier.update({ ...req.body }, { where: { id } });
      return res.json({ message: 'Courrier updated' });
    } else {
      return res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating courrier' });
  }
};

module.exports.getAllCourrier = async (req, res) => {
  try {
    const records = await courrier.findAll();
    return res.json(records);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error retrieving courriers' });
  }
};

module.exports.getCourrierCount = async (req, res) => {
  try {
    const count = await courrier.count();
    return res.json(count);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error retrieving courrier count' });
  }
};
