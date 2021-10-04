import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initState = {};
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// devtool is not going to show when production environment
const composeEnhancer =
  process.env.NODE_ENV === 'production' ? compose : devtools || compose;

const store = createStore(
  createRootReducer(history),
  initState,
  composeEnhancer(applyMiddleware(...middlewares))
);
// Run rootSaga as Saga middleware
sagaMiddleware.run(rootSaga);

export default store;
