const express = require('express');
const DiscsService = require('./discs-service');
const { requireAuth } = require('../middleware/jwt-auth');
const path = require('path');
const xss = require('xss');

const discsRouter = express.Router();
const jsonBodyParser = express.json();

const serializeDisc = disc => ({
    id: disc.id,
    user_id: disc.user_id,
    name: xss(disc.disc_name),
    brand: xss(disc.brand),
    mold: xss(disc.mold),
    type: xss(disc.disc_type),
    plastic: xss(disc.plastic),
    primary_color: disc.primary_color,
    secondary_color: disc.secondary_color,
    speed: disc.speed,
    glide: disc.glide,
    turn: disc.glide,
    fade: disc.fade,
    photo_url: xss(disc.photo_url),
    favorite: disc.favorite,
    thrown: disc.thrown,
    date_modified: disc.date_modified,
    notes: xss(disc.notes)
});

discsRouter
    .route('/')

    .get(requireAuth, async (req, res, next) => {
        try {
            const discs = await DiscsService.getUserDiscs(req.app.get('db'), req.user.id);
            res.status(200).json(discs.map(serializeDisc));
        }   catch(error) {
            next(error)
        }
    })

    .post(requireAuth, jsonBodyParser, async (req, res, next) => {
        const {name, brand, mold, type, plastic, stability, primary_color, secondary_color, speed, glide, turn, fade, notes} = req.body.disc;
        const user_id = req.user.id;
        const newDisc = {
            user_id,
            name,
            brand,
            mold,
            type,
            plastic,
            stability,
            primary_color,
            secondary_color,
            speed,
            glide,
            turn,
            fade,
            notes,
            thrown: 0
        };
        if (!name) {
            console.log(name)
            return res.status(400).json({ error: { message: 'name required' } });
          }
          if (!brand) {
            console.log(brand)
            return res.status(400).json({ error: { message: 'brand required' } });
          }
          if (!mold) {
            console.log(mold)
            return res
              .status(400).json({ error: { message: 'mold required' } });
          }
          if (!plastic) {
            console.log(plastic)
            return res
              .status(400).json({ error: { message: 'plastic required' } });
          }
          if (name.length > 30) {
            console.log(name, '2')
            return res
              .status(400)
              .json({
                error: { message: 'Disc name must not exceed 30 characters' },
              });
          }
          if (brand.length > 20) {
            console.log(brand, '2')
            return res
              .status(400)
              .json({ error: { message: 'Disc brand must not exceed 20 characters' } });
          }
          if (mold.length > 20) {
            console.log(mold, '2')
            return res
              .status(400)
              .json({ error: { message: 'Disc mold must not exceed 20 characters' } });
          }
          if (notes.length > 500) {
            console.log(notes, '2')
            return res
              .status(400)
              .json({ error: { message: 'Disc mold must not exceed 500 characters' } });
          }
          try {
            const disc = await DiscsService.insertDisc(
              req.app.get('db'), 
              newDisc
            );
            console.log(disc)
            res
              .status(201)
              .location(path.posix.join(req.originalUrl, `${disc.id}`))
              .json(serializeDisc(disc));
          } catch (error) {
            next(error)
          }
    })

module.exports = discsRouter;