export const UNSPLASH_API = 'http://localhost:3001/api/unsplash';
export const UNSPLASH_API_DETAILS = (id) => `${UNSPLASH_API}/details/${id}`;

export const LOCAL_STORAGE = Object.freeze({
  IMAGE_KEY: 'images'
});
