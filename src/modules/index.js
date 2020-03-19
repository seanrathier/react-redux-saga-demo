import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';
import counterReducer from './counter/reducer';
import counterSagas from './counter/sagas';

export default (history) => combineReducers({
  router: connectRouter(history),
  counterReducer,
});

export function* rootSagas() {
  yield all([
    fork(counterSagas),
  ]);
}
