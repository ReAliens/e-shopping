import { combineReducers } from 'redux';
import listReducer from './listReducer/listReducer';

const rootReducers = combineReducers({
  listReducer,
});

export default rootReducers;
