import {
  GET_TOKEN_URL_FAILURE, SET_FETCHING_TOKEN_FALSE, SET_FETCHING_TOKEN_TRUE,
  SET_INPUT_VALUE, SET_INPUT_STATE_FROM_LOCALSTORAGE, SET_TOKEN_STATE_FROM_LOCALSTORAGE
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