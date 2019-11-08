import {combineReducers} from 'redux';

import textReducer from './textReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  text1: textReducer,
  counter1: counterReducer,
});
