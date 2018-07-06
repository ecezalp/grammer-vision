import axios from 'axios';

import * as actions from "./actionCreators";
import {setWindowLocation, persistStateOnLocalStorage} from "./windowActions";

export const getTokenUrlRequest = (dispatch, state) => {
  dispatch(actions.setFetchingTokenTrue());
  return axios.get(`/api/authentication`)
    .then(response => {
      persistStateOnLocalStorage(state);
      setWindowLocation(response.data);
    })
    .catch(error => {
      dispatch(actions.getTokenUrlFailure(error.data));
      dispatch(actions.setFetchingTokenFalse());
    });
};

export const getPictureUrls = (dispatch, token, handleSuccess) => {
  dispatch(actions.setFetchingPicturesTrue());
  return axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`)
    .then(response => {
      dispatch(actions.setPicturesFromInsta(response.data));
      handleSuccess();
    })
    .catch(() => {
      dispatch(actions.setFetchingPicturesFalse());
    });
};