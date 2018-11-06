import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);