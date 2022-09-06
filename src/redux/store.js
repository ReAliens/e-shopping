import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReducer';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [thunk, logger];
const store = createStore(
  rootReducers,
  composeEnchancer(applyMiddleware(...middleWares)),
);

export default store;
