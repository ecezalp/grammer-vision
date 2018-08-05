import {combineReducers} from 'redux';

import token from './tokenReducer';
import search from './searchReducer';
import pictures from './picturesReducer';
import privacy from './privacyReducer';

export default combineReducers({
  token,
  search,
  pictures,
  privacy,
});