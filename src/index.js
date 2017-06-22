
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactModal from 'react-modal'

import App from './App';
import reducers from './reducers';

// DB
import {
  loadState,
  saveState,
} from './db/localStorage'

// CSS
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


// React-router-redux
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
const history = createHistory()
const routerMiddlewareInstance = routerMiddleware(history)


// Middlewares
const middlewares = [routerMiddlewareInstance, thunk];

// redux-devtools extension
const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

// Store
const store = createStore(reducers, loadState(), enhancer)

store.subscribe(() => {
  saveState(store.getState())
})

// react-modal
ReactModal.setAppElement('#root')

registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);



