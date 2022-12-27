import { takeLatest } from 'redux-saga/effects';
import actionTypes from '../utils/actionTypes';
import getAllValuesFromStorageSaga from './getAllValuesFromStorageSaga';
import saveInStorageSaga from './saveInStorageSaga';
import removeAllValuesFromStorageSaga from './removeAllValuesFromStorageSaga';

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_ALL_VALUES_FROM_STORAGE, getAllValuesFromStorageSaga);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield takeLatest(actionTypes.SAVE_ALL_VALUES_IN_STORAGE, saveInStorageSaga);
  yield takeLatest(actionTypes.REMOVE_ALL_VALUES_FROM_STORAGE, removeAllValuesFromStorageSaga);
}
