import React, { useEffect } from 'react';
import { size } from 'lodash';

import { REPLACE } from 'actions';
import { SearchBar } from 'components/SearchBar';
import { ImageList } from 'scenes/ImageList';
import { useAppContext } from 'context/AppContext';
import { UnsplashService } from 'services/UnsplashService';
import { removeImage, saveImage } from 'utils/behaviors';

export const ImageViewer = () => {
  const [state, dispatch] = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: REPLACE,
        payload: await new UnsplashService().getPhotos()
      });
    }

    fetchData();
  }, []);

  const openHandler = (image) => () => saveImage(dispatch, image);
  const closeHandler = (image) => () => removeImage(dispatch, image);

  return (
    <>
      <SearchBar />
      {size(state.images) > 0 && (
        <ImageList images={state.images} onOpen={openHandler} onClose={closeHandler} />
      )}
    </>
  );
}
