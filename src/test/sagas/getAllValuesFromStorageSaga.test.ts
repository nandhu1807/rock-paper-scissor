import { testSaga } from 'redux-saga-test-plan';
import actions from '../../client/utils/actionTypes';
import getAllValuesFromStorageSaga from '../../client/saga/getAllValuesFromStorageSaga';

describe('getAllValuesFromStorageSaga', () => {
  let saga;

  test('should return GET_ALL_VALUES_FROM_STORAGE_SUCCESS', () => {
    saga = testSaga(getAllValuesFromStorageSaga);
    const response = { data: [] };
    saga
      .next()
      .next(response)
      .put({
        type: actions.GET_ALL_VALUES_FROM_STORAGE_SUCCESS,
        response: response,
      })
      .next()
      .isDone();
  });

  test('should return GET_ALL_VALUES_FROM_STORAGE_FAILURE', () => {
    saga = testSaga(getAllValuesFromStorageSaga);
    saga
      .next()
      .throw(new Error('Error'))
      .put({
        type: actions.GET_ALL_VALUES_FROM_STORAGE_FAILURE,
        error: new Error('Error'),
      })
      .next()
      .isDone();
  });
});
