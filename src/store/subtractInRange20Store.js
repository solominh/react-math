import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import subtractInRange20 from '../reducers/subtractInRange20';

// DB
import {
  loadState,
  saveState,
} from '../db/localStorage'

// Middlewares
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares)

const KEY = 'SUBTRACT_IN_RANGE_20'


const configureStore = (enhancer) => {
  const store = createStore(subtractInRange20, loadState(KEY), enhancer)

  store.subscribe(() => {
    saveState(KEY, store.getState())
  })

  return store
}

export default configureStore
