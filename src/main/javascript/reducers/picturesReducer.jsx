import {
  SET_FETCHING_PICTURES_TRUE, SET_FETCHING_PICTURES_FALSE,
  SET_PICTURES_FROM_INSTA
} from '../actions/actionConstants';

const initialState = {pictures: [], isFetchingPictures: false};

const pictures = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING_PICTURES_TRUE:
      return Object.assign({}, state, {isFetchingPictures: true});
    case SET_FETCHING_PICTURES_FALSE:
      return Object.assign({}, state, {isFetchingPictures: false});
    case SET_PICTURES_FROM_INSTA:
      return Object.assign({}, state, {pictures: action.payload});
    default:
      return state;
  }
};

export default pictures;