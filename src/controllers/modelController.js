const modelService = require('../services/modelService');
const logger = require('../utils/logger');

exports.trainModel = async (req, res) => {
  try {
    const { trainingData } = req.body;
    await modelService.trainModel(trainingData);
    res.json({ message: 'Model training completed successfully' });
  } catch (error) {
    logger.error('Training error:', error);
    res.status(500).json({ error: 'Model training failed' });
  }
};

exports.predict = async (req, res) => {
  try {
    const prediction = await modelService.predict(req.body);
    res.json(prediction);
  } catch (error) {
    logger.error('Prediction error:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
};

exports.getTrainingStatus = async (req, res) => {
  try {
    const status = modelService.getTrainingStatus();
    res.json(status);
  } catch (error) {
    logger.error('Status check error:', error);
    res.status(500).json({ error: 'Could not get training status' });
  }
};