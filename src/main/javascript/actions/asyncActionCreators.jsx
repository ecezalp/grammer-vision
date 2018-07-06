import axios from 'axios';
import {history} from 'history';

import {getTokenUrlFailure, setFetchingTokenFalse, setFetchingTokenTrue} from "./actionCreators";
import {setWindowLocation, persistStateOnLocalStorage} from "./windowActions";

export const getTokenUrlRequest = (dispatch, state) => {
  dispatch(setFetchingTokenTrue());
  return axios.get(`/api/authentication`)
    .then(response => {
      persistStateOnLocalStorage(state);
      setWindowLocation(response.data);
    })
    .catch(error => {
      dispatch(getTokenUrlFailure(error.data));
      dispatch(setFetchingTokenFalse());
    });
};
