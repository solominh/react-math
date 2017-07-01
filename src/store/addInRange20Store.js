import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import addInRange20 from '../reducers/addInRange20';

// DB
import {
  loadState,
  saveState,
} from '../db/localStorage'

// Middlewares
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares)

const KEY = 'ADD_IN_RANGE_20'


const configureStore = () => {
  const store = createStore(addInRange20, loadState(KEY), enhancer)
  console.log(store.dispatch)

  store.subscribe(() => {
    saveState(KEY, store.getState())
  })

  return store
}

export default configureStore
