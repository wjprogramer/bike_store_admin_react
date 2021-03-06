import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA, FETCH_DATA_SUCCESS } from '../reducers/FakeReducer';

function* fetchData() {
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

function* mySaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}

export default mySaga;