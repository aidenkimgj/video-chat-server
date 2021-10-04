import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import joinReducer from './joinReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    join: joinReducer,
  });

export default createRootReducer;
