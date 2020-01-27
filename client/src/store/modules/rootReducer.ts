import { combineReducers } from 'redux';

import accountReducer from './account/reducer';
import feedReducer from './feed/reducer';

export default combineReducers({
  accountReducer,
  feedReducer,
});
