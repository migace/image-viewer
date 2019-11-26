import React from 'react';
import { get } from 'lodash';

import { ImageTile } from 'components/ImageTile';

export const ImageList = ({ images = [], history }) => {
  const clickImageTilehandler = (imageId) => (e) => {
    e.stopPropagation();
    history.push(`/details/${imageId}`);
  }

  return (
    <div className="columns is-multiline">
      {images.map(image => (
        <div className="column is-3" key={image.id}>
          <ImageTile 
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
          />
        </div>
      ))}
    </div>
  )
};
