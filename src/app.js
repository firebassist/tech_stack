import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';

/*
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
*/

import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';
import Router from './Router';

/*
const store = compose(autoRehydrate())(createStore)(reducers)

persistStore(store, {storage: AsyncStorage} )
*/

/*
import { loadState, saveState } from './storage/LocalStorage';

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState())
})
*/

/*
const reducer = storage.reducer(reducers);
const engine = createEngine('tech');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const load = storage.createLoader(engine);
load(store);
*/


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
