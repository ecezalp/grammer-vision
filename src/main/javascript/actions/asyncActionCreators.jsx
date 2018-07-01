import axios from 'axios';
import {browserHistory} from 'react-router-dom';

import {getTokenUrlSuccess, getTokenUrlFailure, setFetchingTokenFalse, setFetchingTokenTrue} from "./actionCreators";

export const getTokenUrlRequest = (dispatch) => {
  dispatch(setFetchingTokenTrue());
  return axios.get(`/api/authentication`)
    .then(response => {
      window.location.href = response.data;
    })
    .catch(error => {
      dispatch(getTokenUrlFailure(error.data));
      dispatch(setFetchingTokenFalse());
    });
};
