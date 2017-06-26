
import reducers from '../reducers';
import { createStore } from 'redux';

// DB
import {
  loadState,
  saveState,
} from '../db/localStorage'

const KEY = 'APP'

const configureStore = (enhancer) => {
  const store = createStore(reducers, loadState(KEY), enhancer)

  store.subscribe(() => {
    saveState(KEY, store.getState())
  })

  return store
}

export default configureStore
