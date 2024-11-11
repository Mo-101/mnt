const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000';

export const API_CONFIG = {
  ENDPOINTS: {
    TRAINING_PROGRESS: `${API_BASE_URL}/training-progress`,
    // Add other endpoints as needed
  },
};
