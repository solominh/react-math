import { combineReducers } from 'redux';
//react-router-redux
import { routerReducer } from 'react-router-redux'

import reducer from './addInRange20'


const rootReducer = combineReducers({
  reducer,
  router: routerReducer,
});

export default rootReducer;
