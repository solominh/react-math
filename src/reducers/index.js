import { combineReducers } from 'redux';
//react-router-redux
import { routerReducer } from 'react-router-redux'

import reducer from './addOperatorRange20Reducer'


const rootReducer = combineReducers({
  reducer,
  router: routerReducer,
});

export default rootReducer;
