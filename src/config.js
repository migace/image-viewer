const dev = {
  UNSPLASH_API: 'http://localhost:3001',
};

const prod = {
  UNSPLASH_API: 'http://image-viewer-server.migace.usermd.net',
};

const tmpConfig = process.env.REACT_APP_STAGE === 'production' 
  ? prod
  : dev


export const config = {
  ...tmpConfig,
};
