import {
  GET_TOKEN_URL_FAILURE,
  GET_TOKEN_URL_SUCCESS,
  SET_TOKEN_STATE_FROM_LOCALSTORAGE
} from '../actions/actionConstants';

const initialState = {
  url: "",
  tokenString: "",
  isFetchingToken: false
};

const token = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_URL_SUCCESS:
      return {...state, url: action.payload};
    case GET_TOKEN_URL_FAILURE:
      return {...state, url: ''};
    case SET_TOKEN_STATE_FROM_LOCALSTORAGE:
      return {...state, tokenString: action.payload['token']};
    default:
      return state;
  }
};

export default token;