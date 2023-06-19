import { combineReducers } from 'redux';

import loader from './features/loaderSlice';
import toastr from './features/toastrSlice';

export default combineReducers({
  loader,
  toastr,
});
