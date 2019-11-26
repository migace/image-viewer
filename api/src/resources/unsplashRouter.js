const express = require('express');
const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;

global.fetch = fetch;

const unsplashRouter = express.Router();
const unsplash = new Unsplash({
  accessKey: process.env.ACCESS_KEY,
  timeout: 500
});

unsplashRouter.get('/', (_, res) => {
  unsplash.photos.listPhotos(2, 15, "latest")
    .then(response => response.json())
    .then(data => res.json(data))
});

unsplashRouter.get('/details/:photoId', (req, res) => {
  unsplash.photos.getPhoto(req.params.photoId)
    .then(response => response.json())
    .then(data => res.json(data));
});

module.exports = unsplashRouter;
