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
    name: xss(disc.disc_name),
    brand: xss(disc.brand),
    mold: xss(disc.mold),
    type: xss(disc.disc_type),
    plastic: xss(disc.plastic),
    primaryColor,
    secondaryColor,
    speed,
    glide,
    turn,
    fade,
    photo_url: xss(disc.photo_url),
    favorite,
    thrown,
    date_modified,
    notes: xss(disc.notes)
})

module.exports = discsRouter;