import React, { useEffect } from 'react';
import { size } from 'lodash';

import {
  ADD_LOCAL,
  ADD_LOCAL_ID,
  REMOVE_LOCAL,
  REMOVE_LOCAL_ID,
} from 'actions';
import { useAppContext } from 'context/AppContext';
import { SearchBar } from 'components/SearchBar';
import { TextInfo } from 'components/TextInfo';
import { ImageList } from 'scenes/ImageList';
import { LocalStorageService } from 'services';
import { UnsplashService } from 'services/UnsplashService';
import { addLocalImages } from 'utils/behaviors';

export const LocalCollection = () => {
  const [state, dispatch] = useAppContext();
  const localStorageService = new LocalStorageService();

  useEffect(() => {
    const getCollection = () => {
      const ids = localStorageService.get();
      const unsplashService = new UnsplashService();

      Promise.all(ids.map((id) => unsplashService.getPhoto(id)))
        .then(payload => addLocalImages(dispatch, payload));
    }

    getCollection();
  }, []);

  const openHandler = (payload) => () => {
    dispatch({
      type: ADD_LOCAL,
      payload: [payload]
    });
    dispatch({
      type: ADD_LOCAL_ID,
      payload: payload.id
    });
  };

  const closeHandler = (image) => () => {
    dispatch({
      type: REMOVE_LOCAL,
      payload: image.id
    });
    dispatch({
      type: REMOVE_LOCAL_ID,
      payload: image.id
    })
  };

  return (
    <>    
      <SearchBar />
      {size(state.localCollection) > 0 ? (
        <ImageList 
          images={state.localCollection}
          onOpen={openHandler}
          onClose={closeHandler}
        />
      ) : (
        <TextInfo
          ico="database"
          message="collection is empty"
          color="#666"
        />
      )}
    </>
  )
};
