import { combineReducers } from 'redux';

import { filterReducer } from './filter/filterSlice';
import { userReducer } from './user/userSlice';

export const reducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
});
