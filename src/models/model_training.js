let trainingProgress = 0;
let isTraining = false;
let performanceMetrics = {};

export function getTrainingStatus() {
  return {
    progress: trainingProgress,
    isTraining: isTraining,
    metrics: performanceMetrics,
  };
}

export function trainModel() {
  isTraining = true;
  trainingProgress = 0;
  
  // Simulate training and update metrics
  performanceMetrics = {
    accuracy: 0.85,
    loss: 0.15,
    validationAccuracy: 0.82,
  };
  
  trainingProgress = 100;
  isTraining = false;
}