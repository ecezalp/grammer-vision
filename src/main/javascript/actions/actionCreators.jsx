import {GET_TOKEN_URL_SUCCESS, GET_TOKEN_URL_FAILURE, SET_FETCHING_TOKEN_FALSE, SET_FETCHING_TOKEN_TRUE} from "./actionConstants";

export const getTokenUrlSuccess = (response) => {
  return {
    type: GET_TOKEN_URL_SUCCESS,
    payload: response,
  }
};

export const getTokenUrlFailure = (error) => {
  return {
    type: GET_TOKEN_URL_FAILURE,
    payload: error,
  }
};

export const setFetchingTokenTrue = () => {
  return {
    type: SET_FETCHING_TOKEN_TRUE,
  }
};

export const setFetchingTokenFalse = () => {
  return {
    type: SET_FETCHING_TOKEN_FALSE,
  }
};