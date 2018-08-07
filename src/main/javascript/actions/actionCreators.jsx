import {} from "./actionConstants";
import {processPictures} from './actionHelpers'
import {
  CLEAR_SEARCH_INPUT,
  GET_TOKEN_URL_FAILURE,
  SET_TOKEN_STATE_FROM_LOCALSTORAGE,
  SET_FETCHING_TOKEN_TRUE,
  SET_FETCHING_TOKEN_FALSE,
  SET_FETCHING_PICTURES_TRUE,
  SET_FETCHING_TAGS_TRUE,
  SET_VISION_TAGS,
  SET_PICTURES_FROM_INSTA,
  SET_ACTIVE_PICTURE_INDEX,
  SET_INPUT_VALUE,
  TOGGLE_SEARCH_SWITCH,
  TOGGLE_PRIVACY_SWITCH,
  SET_LOGIN_BUTTON,
  SET_CHECKBOX_CHECKED,
  SET_CHECKBOX_HIDDEN,
  SET_DEMO_PROFILE,
} from "./actionConstants";

export const toggleSearchSwitch = () => ({
  type: TOGGLE_SEARCH_SWITCH,
});

export const setDemoProfile = (isDemoProfile) => ({
  type: SET_DEMO_PROFILE,
  payload: isDemoProfile,
});

export const setCheckboxChecked = (isChecked) => ({
  type: SET_CHECKBOX_CHECKED,
  payload: isChecked,
});

export const setCheckboxHidden = (isHidden) => ({
  type: SET_CHECKBOX_HIDDEN,
  payload: isHidden,
});

export const setLoginButton = (isEnabled) => ({
  type: SET_LOGIN_BUTTON,
  payload: isEnabled,
});

export const togglePrivacySwitch = () => ({
  type: TOGGLE_PRIVACY_SWITCH,
});

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

export const setFetchingPicturesTrue = () => ({
  type: SET_FETCHING_PICTURES_TRUE,
});

export const setVisionTags = (tags) => ({
  type: SET_VISION_TAGS,
  payload: tags,
});

export const setPicturesFromInsta = (rawPictures) => ({
  type: SET_PICTURES_FROM_INSTA,
  payload: processPictures(rawPictures),
});

export const setActivePictureIndex = (newIndex) => ({
  type: SET_ACTIVE_PICTURE_INDEX,
  payload: newIndex,
});

export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

export const setTokenStateFromLocalstorage = (state) => ({
  type: SET_TOKEN_STATE_FROM_LOCALSTORAGE,
  payload: state['token'],
});


export const clearSearchInput = () => ({
  type: CLEAR_SEARCH_INPUT,
});