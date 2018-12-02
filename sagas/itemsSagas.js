import { call, put, takeLatest } from 'redux-saga/effects';
import { getJSON, postJSON, API_SERVER } from '../utils/api';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILED
} from '../reduxModules/items';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchItems(action) {
  try {
    const json = yield call(getJSON, `${API_SERVER}/api/items/`);
    yield put({
      type: FETCH_ITEMS_SUCCESS,
      payload: json
    });
  } catch (e) {
    yield put({
      type: FETCH_ITEMS_FAILED,
      message: e.message
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchItemsSagas() {
  yield takeLatest(FETCH_ITEMS, fetchItems);
}

export default watchItemsSagas;
