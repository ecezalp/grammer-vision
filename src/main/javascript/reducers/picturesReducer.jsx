import {
  SET_FETCHING_PICTURES_TRUE, SET_FETCHING_PICTURES_FALSE, SET_VISION_TAGS,
  SET_PICTURES_FROM_INSTA, SET_ACTIVE_PICTURE_INDEX, SET_FETCHING_TAGS_TRUE, SET_FETCHING_TAGS_FALSE
} from '../actions/actionConstants';

const initialState = {
  pictures: [],
  activePictureIndex: 0,
  isFetchingPictures: false,
  isFetchingTags: false,
};

const handleSetVisionTags = (state, payload) => {
  state.pictures[state.activePictureIndex].tags =
    payload.length > 0 ? payload : [{score: 0, name: "NO TAGS FOUND"}];
  return {...state, isFetchingTags: false};
};

const pictures = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISION_TAGS:
      return handleSetVisionTags(state, action.payload);
    case SET_FETCHING_PICTURES_TRUE:
      return ({...state, isFetchingPictures: true});
    case SET_FETCHING_PICTURES_FALSE:
      return ({...state, isFetchingPictures: false});
    case SET_FETCHING_TAGS_TRUE:
      return ({...state, isFetchingTags: true});
    case SET_FETCHING_TAGS_FALSE:
      return ({...state, isFetchingTags: false});
    case SET_PICTURES_FROM_INSTA:
      return ({...state,
        pictures: action.payload,
        activePictureIndex: 0,
        isFetchingPictures: false
      });
    case SET_ACTIVE_PICTURE_INDEX:
      return ({...state, activePictureIndex: action.payload});
    default:
      return state;
  }
};

export default pictures;