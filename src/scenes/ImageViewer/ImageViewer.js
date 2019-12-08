import React, { useEffect, useState } from 'react';
import { size } from 'lodash';

import { REPLACE } from 'actions';
import { SearchBar } from 'components/SearchBar';
import { TextInfo } from 'components/TextInfo';
import { ImageList } from 'scenes/ImageList';
import { useAppContext } from 'context/AppContext';
import { UnsplashService } from 'services/UnsplashService';
import { removeImage, saveImage } from 'utils/behaviors';

export const ImageViewer = () => {
  const [state, dispatch] = useAppContext();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: REPLACE,
          payload: await new UnsplashService().getPhotos()
        });
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }

    fetchData();
  }, [dispatch]);

  const openHandler = (image) => () => saveImage(dispatch, image);
  const closeHandler = (image) => () => removeImage(dispatch, image);

  return (
    <>
      <SearchBar />
      {size(state.images) > 0 && (
        <ImageList images={state.images} onOpen={openHandler} onClose={closeHandler} />
      )}
      {error && (
        <TextInfo ico="ban" message="some error occurred, while fetching api" />
      )}
    </>
  );
}
