import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer/currencyReducer';
import listReducer from './listReducer/listReducer';
import productReducer from './productReducer/productReducer';

const rootReducers = combineReducers({
  listReducer: listReducer,
  currencies: currencyReducer,
  product: productReducer,
});

export default rootReducers;
