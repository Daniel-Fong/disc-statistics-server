const express = require('express');
const DiscsService = require('./discs-service');
const { requireAuth } = require('../middleware/jwt-auth');
const path = require('path');
const xss = require('xss');

const discsRouter = express.Router();
const jsonBodyParser = express.json();

const serializeDisc = disc => ({
    id,
    user_id,
    name: xss(disc.name),
    brand: xss(disc.brand),

})

module.exports = discsRouter;