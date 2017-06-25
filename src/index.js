
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactModal from 'react-modal'


import Root from './components/Root'
import configureStore from './configureStore'


// CSS
import './index.css';

// Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


// Middlewares
const middlewares = [thunk];

// redux-devtools extension
const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

const store = configureStore(enhancer)



// react-modal
ReactModal.setAppElement('#root')
registerServiceWorker();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);



