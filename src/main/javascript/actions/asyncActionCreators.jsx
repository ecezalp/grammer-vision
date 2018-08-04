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

export const getPictureDataFromInstagram = (dispatch, token, handleSuccess) => {
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

export const search = (dispatch, term, token) => {
  dispatch(actions.setFetchingPicturesTrue());
  return axios.get(`https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"1951415043","first":20,"after":null}`)
    .then(response => {
      dispatch(actions.setPicturesFromInsta(response.data));
      dispatch(actions.setFetchingPicturesFalse());
    })
    .catch(() => {
      dispatch(actions.setFetchingPicturesFalse());
    });
};