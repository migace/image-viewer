import {
  ADD_LOCAL,
  ADD_LOCAL_IMAGES,
  ADD_LOCAL_ID,
  REMOVE_LOCAL,
  REMOVE_LOCAL_ID,
  UPDATE_LOCAL
} from 'actions';

export const removeImage = (dispatch, image) => {
  dispatch({
    type: REMOVE_LOCAL,
    payload: image.id
  });
  dispatch({
    type: REMOVE_LOCAL_ID,
    payload: image.id
  })
};

export const saveImage = (dispatch, image) => {
  dispatch({
    type: ADD_LOCAL,
    payload: [image]
  });
  dispatch({
    type: ADD_LOCAL_ID,
    payload: image.id
  });
};

export const editImage = (dispatch, image) => {
  const alt_description = prompt('Edit current title', image.alt_description);

  dispatch({
    type: UPDATE_LOCAL,
    payload: {...image, alt_description}
  })
}

export const addLocalImage = (dispatch, image) => {
  dispatch({
    type: ADD_LOCAL,
    payload: image
  });
  dispatch({
    type: ADD_LOCAL_ID,
    payload: image.id
  });
}

export const addLocalImages = (dispatch, image) => {
  dispatch({
    type: ADD_LOCAL_IMAGES,
    payload: image
  });  
}