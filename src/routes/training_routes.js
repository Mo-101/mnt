const express = require('express');
const { getTrainingStatus } = require('../utils/model_training');
const router = express.Router();

router.get('/training-progress', (req, res) => {
  const status = getTrainingStatus();
  res.json({
    progress: status.progress,
    isTraining: status.isTraining,
    metrics: status.metrics,
    activities: ["Initializing model...", "Loading data...", "Training in progress..."],
    timeLeft: 300,
    elapsedTime: 120,
    knowledgeLevel: 75,
  });
});

module.exports = router;
