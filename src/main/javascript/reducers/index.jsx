import {combineReducers} from 'redux';
import token from './tokenReducer';
import input from './inputReducer';

export default combineReducers({
  token,
  input,
});