import {combineReducers} from 'redux';
import token from './tokenReducer';
import search from './searchReducer';
import pictures from './picturesReducer';

export default combineReducers({
  token,
  search,
  pictures,
});