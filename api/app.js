const express = require('express');
require('dotenv').config()

const unsplashRouter = require('./src/resources/unsplashRouter');
const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/unsplash', unsplashRouter);

app.get('/', (req, res) => res.send(`
  <div style="display: block; margin: 50px auto; width: 600px; height: 500px; text-align: center; font-family: 'Courier', cursive, sans-serif;">
    <h1 style="color: #747474">ImageViewer Server API</h1>
    <small>Powered by <a href="http://www.tiptopdesign.pl">tiptopdesign Michał Gacek</a></small>
  </div>
`));

app.listen(process.env.PORT, () => {
  console.log(`ImageViewer API is running on port ${process.env.PORT}`)
});
