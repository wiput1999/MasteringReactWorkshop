import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from './features/search/Search';
import { Provider } from 'react-redux';

import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './features/search/redux';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware())));

ReactDOM.render(
  <Provider store={store}>
    <SearchPage />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
