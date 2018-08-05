import {
  CLEAR_SEARCH_INPUT,
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
      return ({...state, searchInput: action.payload});
    case CLEAR_SEARCH_INPUT:
      return ({...state, searchInput: ''});
    case TOGGLE_SEARCH_SWITCH:
      return ({...state, isSearchShowing: !state.isSearchShowing});
    default:
      return state;
  }
};

export default search;