import { combineReducers } from 'redux';

//react-router-redux
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  
  router: routerReducer,
});

export default rootReducer;
