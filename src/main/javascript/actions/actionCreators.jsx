import * as constants from "./actionConstants";
import {processPictures, processTags} from './actionHelpers'

export const getTokenUrlFailure = error => ({
  type: constants.GET_TOKEN_URL_FAILURE,
  payload: error,
});

export const setFetchingTokenTrue = () => ({
  type: constants.SET_FETCHING_TOKEN_TRUE,
});

export const setFetchingTokenFalse = () => ({
  type: constants.SET_FETCHING_TOKEN_FALSE,
});

export const setFetchingTagsTrue = () => ({
  type: constants.SET_FETCHING_TAGS_TRUE,
});

export const setFetchingTagsFalse = () => ({
  type: constants.SET_FETCHING_TAGS_FALSE,
});

export const setFetchingPicturesTrue = () => ({
  type: constants.SET_FETCHING_PICTURES_TRUE,
});

export const setFetchingPicturesFalse = () => ({
  type: constants.SET_FETCHING_PICTURES_FALSE,
});

export const setVisionTags = (tags) => ({
  type: constants.SET_VISION_TAGS,
  payload: processTags(tags),
});

export const setPicturesFromInsta = (rawPictures) => ({
  type: constants.SET_PICTURES_FROM_INSTA,
  payload: processPictures(rawPictures),
});

export const setActivePictureIndex = (newIndex) => ({
  type: constants.SET_ACTIVE_PICTURE_INDEX,
  payload: newIndex,
});

export const setInputValue = (event, inputType) => ({
  type: constants.SET_INPUT_VALUE,
  payload: event.target.value,
  data: inputType,
});

export const setInputStateFromLocalstorage = (state) => ({
  type: constants.SET_INPUT_STATE_FROM_LOCALSTORAGE,
  payload: state,
});

export const setTokenStateFromLocalstorage = (state) => ({
  type: constants.SET_TOKEN_STATE_FROM_LOCALSTORAGE,
  payload: state,
});
