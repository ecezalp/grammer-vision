import {
  SET_INPUT_VALUE,
  TOGGLE_SEARCH_SWITCH,
} from '../actions/actionConstants';

const initialState = {
  searchInput: "",
  isSearchShowing: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return Object.assign({}, state, {searchInput: action.payload});
    case TOGGLE_SEARCH_SWITCH:
      return Object.assign({}, state, {isSearchShowing: !state.isSearchShowing});
    default:
      return state;
  }
};

export default search;