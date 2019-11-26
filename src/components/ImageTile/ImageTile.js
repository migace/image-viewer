import React from 'react';
import * as moment from 'moment';

import { ToggleButton } from 'components/ToggleButton';
import { ToggleButtonWrapper } from './styles';

export const ImageTile = ({ image, author, onClick }) => {
  const { description, shortDescription, src, link, createdAt} = image;
  const { image: authorImage, bio, name, username } = author;

  return (
    <div className="card" onClick={onClick}>
      <div className="card-image is-relative">
        <figure className="image is-4by3">
          <img src={src} alt={shortDescription} />
        </figure>
        <ToggleButtonWrapper>
          <ToggleButton
            openText="Save"
            closeText="Remove"
            onOpen={() => {}}
            onClose={() => {}}
          />
        </ToggleButtonWrapper>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={authorImage} alt={bio} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{username}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <a href={link}>Published on Unsplash</a>
          <br />
          <time dateTime={moment(createdAt).format('YYYY-MM-DD')}>{moment(createdAt).format('hh:mm A - D MMM YYYY')}</time>
        </div>
      </div>
    </div>
  );
};
