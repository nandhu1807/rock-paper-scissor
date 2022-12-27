import { testSaga } from 'redux-saga-test-plan';
import actions from '../../client/utils/actionTypes';
import saveInStorageSaga from '../../client/saga/saveInStorageSaga';

describe('saveInStorageSaga', () => {
  let saga;

  test('should return SAVE_ALL_VALUES_IN_STORAGE_SUCCESS', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    saga = testSaga(saveInStorageSaga, { payload: { score1: 'test' } });
    const response = { data: [] };
    saga
      .next()
      .next(response)
      .put({
        type: actions.SAVE_ALL_VALUES_IN_STORAGE_SUCCESS,
        response: { data: [] },
      })
      .next()
      .put({
        type: actions.GET_ALL_VALUES_FROM_STORAGE,
      })
      .next()
      .isDone();
  });

  test('should return SAVE_ALL_VALUES_IN_STORAGE_FAILURE', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    saga = testSaga(saveInStorageSaga, { payload: { score1: 'test' } });
    saga
      .next()
      .throw(new Error('Error'))
      .put({
        type: actions.SAVE_ALL_VALUES_IN_STORAGE_FAILURE,
        error: new Error('Error'),
      })
      .next()
      .isDone();
  });
});
