import React, { memo } from 'react';
import { get } from 'lodash';

import {
  LocalStorageService,
  DEFAULT_KEY,
} from 'services/LocalStorageService';
import { ImageTile } from 'components/ImageTile';
import { OPEN_BUTTON, CLOSE_BUTTON } from 'components/ToggleButton';

export const ImageList = memo(({ images = [], history, onOpen, onClose }) => {
  const localStorageService = new LocalStorageService();
  const clickImageTilehandler = (imageId) => (e) => {
    e.stopPropagation();

    if (e.target.className.includes(OPEN_BUTTON)) {
      localStorageService.overwrite(DEFAULT_KEY, imageId);
    } else if (e.target.className.includes(CLOSE_BUTTON)) {
      localStorageService.remove(DEFAULT_KEY, imageId);
    } else {
      history.push(`/details/${imageId}`);
    }
  }

  return (
    <div className="columns is-multiline">
      {images.map(image => (
        <div className="column is-3" key={image.id}>
          <ImageTile
            local={localStorageService.has(DEFAULT_KEY, image.id)}
            image={{
              description: get(image, 'description', '') || 'User don\'t create any description for this image :(',
              shortDescription: image.alt_description,
              src: image.urls.small,
              link: image.links.html,
              createdAt: image.created_at
            }}
            author={{
              image: image.user.profile_image.medium,
              bio: image.user.bio,
              name: image.user.name,
              username: image.user.username,
            }}
            onClick={clickImageTilehandler(image.id)}
            onOpen={onOpen(image)}
            onClose={onClose(image)}
          />
        </div>
      ))}
    </div>
  )
});

ImageList.defaultProps = {
  onOpen: () => () => {},
  onClose: () => () => {},
};
