import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import getExchangeRates from './sagas/getExchangeRates';
import reducer from './reducer';
import MainPage from './pages/main/MainPage';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(getExchangeRates);

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={MainPage} />
    </Router>
  </Provider>
);

export default App;
