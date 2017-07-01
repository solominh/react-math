import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multiply1Digit from '../reducers/multiply1Digit';

// DB
import {
  loadState,
  saveState,
} from '../db/localStorage'

// Middlewares
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares)

const KEY = 'MULTIPLY_1_DIGIT'


const configureStore = () => {
  const store = createStore(multiply1Digit, loadState(KEY), enhancer)

  store.subscribe(() => {
    saveState(KEY, store.getState())
  })

  return store
}

export default configureStore
