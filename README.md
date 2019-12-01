This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Image Viewer

Image viewer which download images from Unsplash service and give possibility for user to save these images locally. You can modify some properties of every saved image.

![Image Viewer app](http://serwer1843592.home.pl/static/images/github/image-viewer.png)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Server

You can run locally server using `api/` directory. In this directory, you can run:

### `npm run dev`

Runs API server in development mode.

## Configuration

In `api/` directory of this project you should change name of .env-sample file to .env.
There you should put your Unsplash API credentials.

For demo, you can use my hosted API service, please run app by `npm start`. In development mode
you can use dev server - `npm run dev`. For details, please see `src/config.js`
