import { call, put } from 'redux-saga/effects';
import actions from '../utils/actionTypes';
import { removeAllValuesFromLocalStorage } from '../services/storageApi';

export default function* removeAllValuesFromStorageSaga() {
  try {
    const response: void = yield call(removeAllValuesFromLocalStorage);
    yield put({
      type: actions.REMOVE_ALL_VALUES_FROM_STORAGE_SUCCESS,
      response,
    });
    yield put({
      type: actions.GET_ALL_VALUES_FROM_STORAGE,
      response,
    });
  } catch (error) {
    yield put({
      type: actions.REMOVE_ALL_VALUES_FROM_STORAGE_FAILURE,
      error,
    });
  }
}
