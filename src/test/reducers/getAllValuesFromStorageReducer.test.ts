import actions from '../../client/utils/actionTypes';
import getFromStorageReducer from '../../client/reducers/getFromStorageReducer';

describe('getAllValuesFromStorageReducer', () => {
  const error = new Error('Error');

  it('should return mapFromStorage on GET_ALL_VALUES_FROM_STORAGE_SUCCESS', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
      expect(getFromStorageReducer({},
        {
          type: actions.GET_ALL_VALUES_FROM_STORAGE_SUCCESS,
          response: [],
        },
      ),
    ).toEqual({
      mapFromStorage: [],
    });
  });

  it('should return error on GET_ALL_VALUES_FROM_STORAGE_FAILURE', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getFromStorageReducer({},
        {
          type: actions.GET_ALL_VALUES_FROM_STORAGE_FAILURE,
          error: error,
        },
      ),
    ).toEqual({
      errorMsg: error,
    });
  });

  it('should return empty state on no action matching', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getFromStorageReducer({},
        {
          type: 'NO_ACTION_MATCHING',
        },
      ),
    ).toEqual({});
  });
});
