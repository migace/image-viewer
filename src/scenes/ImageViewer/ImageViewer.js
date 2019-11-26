import React from 'react';

import { SearchBar } from 'components/SearchBar';
import { ImageList } from 'scenes/ImageList';

export const ImageViewer = ({ images }) => (
  <>
    <SearchBar />
    <ImageList images={images} />
  </>
);
