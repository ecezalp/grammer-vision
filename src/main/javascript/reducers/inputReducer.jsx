import {SET_INPUT_STATE_FROM_LOCALSTORAGE, SET_INPUT_VALUE} from '../actions/actionConstants';

const initialState = {tagName: "", pictureCount: "", visionTagCount: ""};

const setInputValueHandler = (state, action) => {
  let newState = Object.assign({}, state);
  newState[action.data] = action.payload;
  return newState;
};

const input = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return setInputValueHandler(state, action);
    case SET_INPUT_STATE_FROM_LOCALSTORAGE:
      return action.payload;
    default:
      return state;
  }
};

export default input;