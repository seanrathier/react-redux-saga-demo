import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import * as History from 'history';
import createRootReducer, { rootSagas } from './modules';

export const history = History.createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSagas);
