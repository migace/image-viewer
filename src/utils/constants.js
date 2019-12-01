import { config } from 'config';
export const UNSPLASH_API = `${config.UNSPLASH_API}/api/unsplash`;
export const UNSPLASH_API_DETAILS = (id) => `${UNSPLASH_API}/details/${id}`;

export const LOCAL_STORAGE = Object.freeze({
  IMAGE_KEY: 'images'
});
