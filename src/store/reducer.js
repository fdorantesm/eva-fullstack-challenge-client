import { combineReducers } from 'redux';
import auth from './auth/authReducers';
import explorations from './explorations/explorationsReducer';

export default combineReducers({
  auth,
  explorations
});
