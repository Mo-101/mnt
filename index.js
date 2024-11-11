'use strict';

const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const oas3Tools = require('oas3-tools');
const logger = require('./src/utils/logger');
const habitatRoutes = require('./src/routes/habitatRoutes');
const modelRoutes = require('./src/routes/modelRoutes');

// Load environment variables from .env file
dotenv.config();

const serverPort = process.env.PORT || 8080;  // Defaulting to 8080 if PORT is not defined

// SwaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

// Initialize OAS3Tools configuration for Swagger
const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const app = expressAppConfig.getApp();

// Additional Middleware and Configurations
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/habitats', habitatRoutes);
app.use('/api/model', modelRoutes);

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to MoStar API - Mastomys Natalensis Tracker');
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start HTTP Server with Swagger UI available at /docs
http.createServer(app).listen(serverPort, () => {
    logger.info(`Server is running on http://localhost:${serverPort}`);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

module.exports = app;
