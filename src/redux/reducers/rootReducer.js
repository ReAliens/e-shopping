import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer/currencyReducer';
import listReducer from './listReducer/listReducer';

const rootReducers = combineReducers({
  listReducer: listReducer,
  currencies: currencyReducer,
});

export default rootReducers;
