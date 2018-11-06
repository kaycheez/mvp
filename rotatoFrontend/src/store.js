/* Reducers */
import { navReducer, middleware } from 'navigation';

const rootReducer = combineReducers({
  nav: navReducer,
});

// Calling a separated store manager
const store = configureStore(rootReducer, rootSaga, middleware);


// Inside the creation of my store

/* Navigation */
middleware.push(rootNavigation);
enhancers.push(applyMiddleware(...middleware));
createStore(rootReducer, compose(...enhancers));