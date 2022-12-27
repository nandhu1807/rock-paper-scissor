import { call, put } from 'redux-saga/effects';
import actions from '../utils/actionTypes';
import { saveInLocalStorage } from '../services/storageApi';

export default function* saveInStorageSaga(action: { payload: { key: string; value: string } }) {
  try {
    const response: string | null = yield call(saveInLocalStorage, action.payload);
    yield put({
      type: actions.SAVE_ALL_VALUES_IN_STORAGE_SUCCESS,
      response,
    });
    yield put({
      type: actions.GET_ALL_VALUES_FROM_STORAGE,
    });
  } catch (error) {
    yield put({
      type: actions.SAVE_ALL_VALUES_IN_STORAGE_FAILURE,
      error,
    });
  }
}
