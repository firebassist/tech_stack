import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';

import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';
import Router from './Router';

const store = compose(autoRehydrate())(createStore)(reducers)

persistStore(store, {storage: AsyncStorage, keyPrefix: 'rpstorage'} )


const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
