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
});

discsRouter
    .route('/')
    .post(requireAuth, async (req, res, next) => {
        const {name, brand, mold, type, plastic, stability, primaryColor, secondaryColor, speed, glide, turn, fade, notes} = req.body;
        const user_id = req.user_id;
        const newDisc = {
            user_id,
            name,
            brand,
            mold,
            type,
            plastic,
            stability,
            primaryColor,
            secondaryColor,
            speed,
            glide,
            turn,
            fade,
            notes
        };
        if (!name) {
            return res.status(400).json({ error: { message: 'name required' } });
          }
          if (!brand) {
            return res.status(400).json({ error: { message: 'brand required' } });
          }
          if (!mold) {
            return res
              .status(400).json({ error: { message: 'mold required' } });
          }
          if (!plastic) {
            return res
              .status(400).json({ error: { message: 'plastic required' } });
          }
          if (name.length > 30) {
            return res
              .status(400)
              .json({
                error: { message: 'Disc name must not exceed 30 characters' },
              });
          }
          if (brand.length > 20) {
            return res
              .status(400)
              .json({ error: { message: 'Disc brand must not exceed 20 characters' } });
          }
          if (mold.length > 20) {
            return res
              .status(400)
              .json({ error: { message: 'Disc mold must not exceed 20 characters' } });
          }
          if (notes.length > 500) {
            return res
              .status(400)
              .json({ error: { message: 'Disc mold must not exceed 500 characters' } });
          }
          try {
            const disc = await DiscsService.insertDisc(
              req.app.get('db'), 
              newDisc
            );
            res
              .status(201)
              .location(path.posix.join(req.originalUrl, `${post.id}`))
              .json(serializePost(post));
          } catch (error) {
            next(error)
          }
    })

module.exports = discsRouter;