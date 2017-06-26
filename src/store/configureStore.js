
import reducers from '../reducers';
import { createStore } from 'redux';

// DB
import {
  loadState,
  saveState,
} from '../db/localStorage'


const configureStore = (enhancer) => {
  const store = createStore(reducers, loadState('App'), enhancer)

  store.subscribe(() => {
    saveState(store.getState('App'))
  })

  return store
}

export default configureStore
