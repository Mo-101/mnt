require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./src/utils/logger');
const habitatRoutes = require('./src/routes/habitatRoutes');
const modelRoutes = require('./src/routes/modelRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/habitats', habitatRoutes);
app.use('/api/model', modelRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to MoStar API - Mastomys Natalensis Tracker');
});

// Error handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});

module.exports = app;