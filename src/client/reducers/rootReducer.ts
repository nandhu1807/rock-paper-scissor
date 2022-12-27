import { combineReducers } from 'redux';
import getFromStorageReducer from './getFromStorageReducer';

const rootReducer = combineReducers({
  getFromStorageReducer,
});

export default rootReducer;
