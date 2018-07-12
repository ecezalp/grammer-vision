import {
  TOGGLE_ACTIVE_INPUT_FIELD,
  SET_INPUT_STATE_FROM_LOCALSTORAGE,
  SET_INPUT_VALUE
} from '../actions/actionConstants';

const initialState = {
  hashtag: {
    value: "",
    isSelected: true,
    label: "hashtag",
    placeholder: "#",
  },
  username: {
    value: "",
    isSelected: false,
    label: "username",
    placeholder: "@",
  },
};

const handleSetInputValue = (state, action) => {
  let newState = Object.assign({}, state);
  newState[action.data]["value"] = action.payload;
  return newState;
};

const handleToggleInputSelection = (state) => {
  let newState = Object.assign({}, state);
  newState["hashtag"]["value"] = "";
  newState["username"]["value"] = "";
  newState["hashtag"]["isSelected"] = !state["hashtag"]["isSelected"];
  newState["username"]["isSelected"] = !state["username"]["isSelected"];
  return newState;
};

const input = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return handleSetInputValue(state, action);
    case TOGGLE_ACTIVE_INPUT_FIELD:
      return handleToggleInputSelection(state, action);
    case SET_INPUT_STATE_FROM_LOCALSTORAGE:
      return action.payload;
    default:
      return state;
  }
};

export default input;