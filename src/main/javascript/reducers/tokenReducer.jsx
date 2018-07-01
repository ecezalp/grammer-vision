import {GET_TOKEN_URL_FAILURE, GET_TOKEN_URL_SUCCESS} from '../actions/actionConstants';

const initialState = {url: "", tokenString: "", isFetchingToken: false};

const token  = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_URL_SUCCESS:
      return Object.assign({}, state, {url: action.payload});
    case GET_TOKEN_URL_FAILURE:
      return Object.assign({}, state, {url: ""});
    default:
      return state;
  }
};

export default token;