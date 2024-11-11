const Habitat = require('../../db/models/habitat');
const logger = require('../utils/logger');

exports.getAllHabitats = async (req, res) => {
  try {
    const habitats = await Habitat.getAll();
    res.json(habitats);
  } catch (error) {
    logger.error('Error in getAllHabitats:', error);
    res.status(500).json({ message: 'Error fetching habitats' });
  }
};

exports.getHabitatById = async (req, res) => {
  try {
    const habitat = await Habitat.getById(req.params.id);
    if (habitat) {
      res.json(habitat);
    } else {
      res.status(404).json({ message: 'Habitat not found' });
    }
  } catch (error) {
    logger.error('Error in getHabitatById:', error);
    res.status(500).json({ message: 'Error fetching habitat' });
  }
};

exports.createHabitat = async (req, res) => {
  try {
    const { name, location, description } = req.body;
    const newHabitat = await Habitat.create(name, location, description);
    res.status(201).json(newHabitat);
  } catch (error) {
    logger.error('Error in createHabitat:', error);
    res.status(500).json({ message: 'Error creating habitat' });
  }
};

exports.updateHabitat = async (req, res) => {
  try {
    const { name, location, description } = req.body;
    const updatedHabitat = await Habitat.update(req.params.id, name, location, description);
    if (updatedHabitat) {
      res.json(updatedHabitat);
    } else {
      res.status(404).json({ message: 'Habitat not found' });
    }
  } catch (error) {
    logger.error('Error in updateHabitat:', error);
    res.status(500).json({ message: 'Error updating habitat' });
  }
};

exports.deleteHabitat = async (req, res) => {
  try {
    const deletedHabitat = await Habitat.delete(req.params.id);
    if (deletedHabitat) {
      res.json({ message: 'Habitat deleted successfully' });
    } else {
      res.status(404).json({ message: 'Habitat not found' });
    }
  } catch (error) {
    logger.error('Error in deleteHabitat:', error);
    res.status(500).json({ message: 'Error deleting habitat' });
  }
};