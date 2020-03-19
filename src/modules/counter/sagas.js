import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import {
  INCREMENT_REQUESTED, DECREMENT_REQUESTED, increment, decrement,
} from './actions';

function* incrementCount() {
  try {
    yield put(increment());
  } catch (e) {
    yield put({ type: 'INCREMENT_FAILED', message: e.message });
  }
}

function* incrementSaga() {
  yield takeLatest(INCREMENT_REQUESTED, incrementCount);
}

function* decrementCount() {
  try {
    yield put(decrement());
  } catch (e) {
    yield put({ type: 'DECREMENT_FAILED', message: e.message });
  }
}

function* decrementSaga() {
  yield takeLatest(DECREMENT_REQUESTED, decrementCount);
}

function* sagas() {
  yield all([fork(incrementSaga), fork(decrementSaga)]);
}

export default sagas;
