import { testSaga } from 'redux-saga-test-plan';
import actions from '../../client/utils/actionTypes';
import removeAllValuesFromStorageSaga from '../../client/saga/removeAllValuesFromStorageSaga';

describe('removeAllValuesFromStorageSaga', () => {
  let saga;

  test('should return REMOVE_ALL_VALUES_FROM_STORAGE_SUCCESS', () => {
    saga = testSaga(removeAllValuesFromStorageSaga);
    const response = { data: [] };
    saga
      .next()
      .next(response)
      .put({
        type: actions.REMOVE_ALL_VALUES_FROM_STORAGE_SUCCESS,
        response: response,
      })
      .next()
      .put({
        type: actions.GET_ALL_VALUES_FROM_STORAGE,
        response: response,
      })
      .next()
      .isDone();
  });

  test('should return REMOVE_ALL_VALUES_FROM_STORAGE_FAILURE', () => {
    saga = testSaga(removeAllValuesFromStorageSaga);
    saga
      .next()
      .throw(new Error('Error'))
      .put({
        type: actions.REMOVE_ALL_VALUES_FROM_STORAGE_FAILURE,
        error: new Error('Error'),
      })
      .next()
      .isDone();
  });
});
