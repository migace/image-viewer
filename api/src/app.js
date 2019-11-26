require('dotenv').config();
const express = require('express');

const unsplashRouter = require('./resources/unsplashRouter');
const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/unsplash', unsplashRouter);

app.listen(process.env.PORT, () => {
  console.log(`ImageViewer API is running on port ${process.env.PORT}`)
});
