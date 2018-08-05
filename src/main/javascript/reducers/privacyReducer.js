import {
  TOGGLE_PRIVACY_SWITCH,
  TOGGLE_README_SWITCH,
} from '../actions/actionConstants';

const initialState = {
  isPrivacyShowing: false,
  isReadmeShowing: false,
};


const privacy = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRIVACY_SWITCH:
      return ({...state, isPrivacyShowing: !state.isPrivacyShowing});
    case TOGGLE_README_SWITCH:
      return ({...state, isReadmeShowing: !state.isReadmeShowing});
    default:
      return state;
  }
};

export default privacy;