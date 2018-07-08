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
  state.pictures[state.activePictureIndex].tags = payload;
  return state;
};

const pictures = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISION_TAGS:
      debugger;
      return handleSetVisionTags(state, action.payload);
    case SET_FETCHING_PICTURES_TRUE:
      return Object.assign({}, state, {isFetchingPictures: true});
    case SET_FETCHING_PICTURES_FALSE:
      return Object.assign({}, state, {isFetchingPictures: false});
    case SET_FETCHING_TAGS_TRUE:
      return Object.assign({}, state, {isFetchingTags: true});
    case SET_FETCHING_TAGS_FALSE:
      return Object.assign({}, state, {isFetchingTags: false});
    case SET_PICTURES_FROM_INSTA:
      return Object.assign({}, state, {pictures: action.payload});
    case SET_ACTIVE_PICTURE_INDEX:
      return Object.assign({}, state, {activePictureIndex: action.payload});
    default:
      return state;
  }
};

export default pictures;