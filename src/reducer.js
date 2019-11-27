import {
  ADD,
  ADD_LOCAL,
  ADD_LOCAL_ID,
  ADD_LOCAL_IMAGES,
  REMOVE_LOCAL,
  REMOVE_LOCAL_ID,
  REPLACE,
  UPDATE_LOCAL
} from 'actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case REPLACE:
      return { ...state, images: action.payload };
    case ADD: 
      return { ...state, images: [...state.images, action.payload] };
    case ADD_LOCAL:
      return { ...state, localCollection: [...state.localCollection, ...action.payload] };
    case ADD_LOCAL_ID:
      return { ...state, localIds: [...state.localIds, action.payload] };
    case ADD_LOCAL_IMAGES:
      return { ...state, localCollection: action.payload };
    case REMOVE_LOCAL:
      return { ...state,  localCollection: state.localCollection.filter(item => item.id !== action.payload) };
    case REMOVE_LOCAL_ID:
      return { ...state, localIds: state.localIds.filter(id => id !== action.payload) };
    case UPDATE_LOCAL:
      return {
        ...state, 
        localCollection: state.localCollection.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        })
      };
    default:
      return state;
  }
};
