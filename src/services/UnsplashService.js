import {
  UNSPLASH_API,
  UNSPLASH_API_DETAILS,
} from 'utils/constants';
import { ServiceException } from 'utils/exceptions';

let instance = null;

export class UnsplashService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getPhotos = (page = 1, per_page = 10, order_by = 'latest') => (
    fetch(UNSPLASH_API)
      .then(data => data.json())
      .catch(err => {
        throw new ServiceException(err);
      })
  )

  getPhoto = (photoId) => {
    if (!photoId) {
      throw new Error('Parameter photoId is required!');
    }

    return fetch(UNSPLASH_API_DETAILS(photoId))
      .then(data => data.json())
  }
}
