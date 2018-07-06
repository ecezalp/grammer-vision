import {
  GET_TOKEN_URL_FAILURE, SET_FETCHING_TOKEN_FALSE, SET_FETCHING_TOKEN_TRUE,
  SET_INPUT_VALUE, SET_INPUT_STATE_FROM_LOCALSTORAGE, SET_TOKEN_STATE_FROM_LOCALSTORAGE, SET_PICTURES_FROM_INSTA,
  SET_FETCHING_PICTURES_FALSE, SET_FETCHING_PICTURES_TRUE
} from "./actionConstants";

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

export const setFetchingPicturesTrue = () => ({
  type: SET_FETCHING_PICTURES_TRUE,
});

export const setFetchingPicturesFalse = () => ({
  type: SET_FETCHING_PICTURES_FALSE,
});

export const setPicturesFromInsta = (rawPictures) => {
  let pictures = rawPictures.data.map(entry => Object.assign({}, {id: entry.id}, {url: entry.images.standard_resolution.url}));
  return {
    type: SET_PICTURES_FROM_INSTA,
    payload: pictures,
  }
};

export const setInputValue = (event, inputType) => ({
  type: SET_INPUT_VALUE,
  payload: event.target.value,
  data: inputType,
});

export const setInputStateFromLocalstorage = (state) => ({
  type: SET_INPUT_STATE_FROM_LOCALSTORAGE,
  payload: state,
});

export const setTokenStateFromLocalstorage = (state) => ({
  type: SET_TOKEN_STATE_FROM_LOCALSTORAGE,
  payload: state,
});