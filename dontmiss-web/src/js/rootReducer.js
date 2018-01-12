import { combineReducers } from 'redux';

import user from './components/first-component/first-reducer.js';
import info from './components/second-component/second-reducer.js';

export default combineReducers({
  user,
  info
});