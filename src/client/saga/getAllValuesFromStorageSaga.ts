import { call, put } from 'redux-saga/effects';
import actions from '../utils/actionTypes';
import { getAllFromLocalStorage } from '../services/storageApi';
import { GetAllValuesFromStorage } from '../utils/types';

export default function* getAllValuesFromStorageSaga() {
  try {
    const response: GetAllValuesFromStorage = yield call(getAllFromLocalStorage);
    yield put({
      type: actions.GET_ALL_VALUES_FROM_STORAGE_SUCCESS,
      response,
    });
  } catch (error) {
    yield put({
      type: actions.GET_ALL_VALUES_FROM_STORAGE_FAILURE,
      error,
    });
  }
}
