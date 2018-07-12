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
      dispatch(actions.setFetchingPicturesFalse());
      handleSuccess();
    })
    .catch(() => {
      dispatch(actions.setFetchingPicturesFalse());
    });
};

export const getPictureTags = (dispatch, picture) => {
  dispatch(actions.setFetchingTagsTrue());
  return axios.post(`/api/tags`, picture)
    .then(response => {
      dispatch(actions.setVisionTags(response.data));
      dispatch(actions.setFetchingTagsFalse());
    })
    .catch(() => {
      dispatch(actions.setFetchingTagsFalse());
    });
};