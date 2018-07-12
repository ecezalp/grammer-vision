import {} from "./actionConstants";
import {processPictures, processTags} from './actionHelpers'
import {
  GET_TOKEN_URL_FAILURE,
  SET_TOKEN_STATE_FROM_LOCALSTORAGE,
  SET_FETCHING_TOKEN_TRUE,
  SET_FETCHING_TOKEN_FALSE,
  SET_FETCHING_TAGS_FALSE,
  SET_FETCHING_PICTURES_TRUE,
  SET_FETCHING_TAGS_TRUE,
  SET_VISION_TAGS,
  TOGGLE_ACTIVE_INPUT_FIELD,
  SET_PICTURES_FROM_INSTA,
  SET_ACTIVE_PICTURE_INDEX,
  SET_INPUT_VALUE,
  SET_INPUT_STATE_FROM_LOCALSTORAGE,
} from "./actionConstants";
import {} from "./actionConstants";

export const getTokenUrlFailure = error => ({
  type: GET_TOKEN_URL_FAILURE,
  payload: error,
});

export const setFetchingTokenTrue = () => ({
  type: SET_FETCHING_TOKEN_TRUE,
});

export const setFetchingTokenFalse = () => ({
  type: SET_FETCHING_TOKEN_FALSE,
});

export const setFetchingTagsTrue = () => ({
  type: SET_FETCHING_TAGS_TRUE,
});

export const setFetchingTagsFalse = () => ({
  type: SET_FETCHING_TAGS_FALSE,
});

export const setFetchingPicturesTrue = () => ({
  type: SET_FETCHING_PICTURES_TRUE,
});

export const setFetchingPicturesFalse = () => ({
  type: SET_FETCHING_TAGS_TRUE,
});

export const setVisionTags = (tags) => ({
  type: SET_VISION_TAGS,
  payload: tags,
});

export const toggleActiveInputField = () => ({
  type: TOGGLE_ACTIVE_INPUT_FIELD,
});

export const setPicturesFromInsta = (rawPictures) => ({
  type: SET_PICTURES_FROM_INSTA,
  payload: processPictures(rawPictures),
});

export const setActivePictureIndex = (newIndex) => ({
  type: SET_ACTIVE_PICTURE_INDEX,
  payload: newIndex,
});

export const setInputValue = (event, inputLabel) => ({
  type: SET_INPUT_VALUE,
  payload: event.target.value,
  data: inputLabel,
});

export const setInputStateFromLocalstorage = (state) => ({
  type: SET_INPUT_STATE_FROM_LOCALSTORAGE,
  payload: state,
});

export const setTokenStateFromLocalstorage = (state) => ({
  type: SET_TOKEN_STATE_FROM_LOCALSTORAGE,
  payload: state,
});