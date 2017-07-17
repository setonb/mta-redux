import { combineReducers } from 'redux';
import GetTimes from './get-times-reducer';
import Stations from './stations-reducer';

const rootReducer = combineReducers({
  stations: Stations,
  times: GetTimes
});

export default rootReducer;
