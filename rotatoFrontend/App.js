import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

// Navigator
import Stack from './src/navigator';

const App = () => (
  <Provider store={store}>
    <Stack/>
  </Provider>
);

export default App;
