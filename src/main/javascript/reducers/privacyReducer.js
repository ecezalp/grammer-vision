import {
  TOGGLE_PRIVACY_SWITCH,
  SET_LOGIN_BUTTON,
  SET_CHECKBOX_CHECKED,
  SET_CHECKBOX_HIDDEN
} from '../actions/actionConstants';

const initialState = {
  isPrivacyShowing: false,
  isLoginEnabled: false,
  checkbox: {
    isChecked: false,
    isHidden: false,
  }
};


const privacy = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRIVACY_SWITCH:
      return ({...state, isPrivacyShowing: !state.isPrivacyShowing});
    case SET_LOGIN_BUTTON:
      return ({...state, isLoginEnabled: action.payload});
    case SET_CHECKBOX_CHECKED:
      return ({...state, checkbox: {...state.checkbox, isChecked: action.payload}});
    case SET_CHECKBOX_HIDDEN:
      return ({...state, checkbox: {...state.checkbox, isHidden: action.payload}});
    default:
      return state;
  }
};

export default privacy;