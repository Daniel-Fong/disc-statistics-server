const express = require('express');
const PdgaApiService = require('./pdga-api-service');
const { requireAuth } = require('../middleware/jwt-auth');
const path = require('path');

const pdgaRouter = express.Router();
const jsonBodyParser = express.json();

pdgaRouter
    .route('/pdgaLogin')
    .get(requireAuth, async (req, res, next) => {
        try {
            const sessionInfo = await PdgaApiService.login();
        }
    })

module.exports = threadsRouter;