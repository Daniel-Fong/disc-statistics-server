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
            if (!sessionInfo) {
                return res.status(404).json({
                    error: { message: 'Login Failed' },
                });
            }
            res.status(200).json(sessionInfo)
        } catch(error) {
            next(error)
        }
    });

pdgaRouter

module.exports = threadsRouter;