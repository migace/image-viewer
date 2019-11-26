import React, { useEffect, useState } from 'react';

import { SearchBar } from 'components/SearchBar';
import { ImageList } from 'scenes/ImageList';
import { LOCAL_STORAGE } from 'utils/constants';

export const LocalCollection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getCollection = () => localStorage.getItem(LOCAL_STORAGE.IMAGE_KEY) || [];

    setImages(getCollection());
    console.log(images);
  }, []);

  return (
    <>
      <SearchBar />
      <ImageList images={images} />
    </>
  )
};
