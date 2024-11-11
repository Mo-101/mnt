'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.adaptive_learning_post = function adaptive_learning_post (req, res, next, body) {
  Default.adaptive_learning_post(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAnomaly_detectionPOST = function apiAnomaly_detectionPOST (req, res, next, body) {
  Default.apiAnomaly_detectionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiData_enrichmentPOST = function apiData_enrichmentPOST (req, res, next, body) {
  Default.apiData_enrichmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiData_transformationPOST = function apiData_transformationPOST (req, res, next, body) {
  Default.apiData_transformationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiHabitatsPOST = function apiHabitatsPOST (req, res, next, body) {
  Default.apiHabitatsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPredict_movementsGET = function apiPredict_movementsGET (req, res, next, location, date) {
  Default.apiPredict_movementsGET(location, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTemporal_analysisPOST = function apiTemporal_analysisPOST (req, res, next, body) {
  Default.apiTemporal_analysisPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTrain_modelPOST = function apiTrain_modelPOST (req, res, next, body) {
  Default.apiTrain_modelPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.augmentation_remote_sensing_post = function augmentation_remote_sensing_post (req, res, next, body) {
  Default.augmentation_remote_sensing_post(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.caching_post = function caching_post (req, res, next, body) {
  Default.caching_post(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.context_aware_post = function context_aware_post (req, res, next, body) {
  Default.context_aware_post(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.data_quality_post = function data_quality_post (req, res, next, body) {
  Default.data_quality_post(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.integrate_mapbox = function integrate_mapbox (req, res, next, body) {
  Default.integrate_mapbox(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.integrate_openweather = function integrate_openweather (req, res, next, latitude, longitude) {
  Default.integrate_openweather(latitude, longitude)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ml_preprocessing_post = function ml_preprocessing_post (req, res, next, body) {
  Default.ml_preprocessing_post(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rate_limiting_post = function rate_limiting_post (req, res, next) {
  Default.rate_limiting_post()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
