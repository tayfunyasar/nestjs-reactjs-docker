import { combineReducers } from 'redux';
import mobileReducer from './mobile/reducer'

export default combineReducers({
  mobile: mobileReducer
});  