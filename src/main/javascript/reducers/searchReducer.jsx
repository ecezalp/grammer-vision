import {
  SET_INPUT_VALUE,
} from '../actions/actionConstants';

const initialState = {
  input: "",
};

const input = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return Object.assign({}, state, {input: action.payload});
    default:
      return state;
  }
};

export default input;