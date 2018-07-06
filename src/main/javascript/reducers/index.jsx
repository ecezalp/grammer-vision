import {combineReducers} from 'redux';
import token from './tokenReducer';
import input from './inputReducer';
import pictures from './picturesReducer';

export default combineReducers({
  token,
  input,
  pictures,
});