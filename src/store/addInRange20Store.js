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



const configureStore = (enhancer) => {
  const store = createStore(addInRange20, loadState('ADD_IN_RANGE_20'), enhancer)

  store.subscribe(() => {
    saveState(store.getState('ADD_IN_RANGE_20'))
  })

  return store
}

export default configureStore
