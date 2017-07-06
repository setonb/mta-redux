import { combineReducers } from 'redux';
import GetTimes from './get-times-reducer';

const rootReducer = combineReducers({
  times: GetTimes
});

export default rootReducer;
