import actions from '../utils/actionTypes';
import { GetAllValuesFromStorage } from '../utils/types';

const defaultState = {
  mapFromStorage: { score1: 0, score2: 0 },
  errorMsg: '',
};

const getAllValuesFromStorageReducer = (
  state = defaultState,
  action: { type: string; response: GetAllValuesFromStorage; error: string },
) => {
  switch (action.type) {
    case actions.GET_ALL_VALUES_FROM_STORAGE_SUCCESS:
      return Object.assign({}, state, { mapFromStorage: action.response });
    case actions.GET_ALL_VALUES_FROM_STORAGE_FAILURE:
      return Object.assign({}, state, { errorMsg: action.error });
    default:
      return state;
  }
};

export default getAllValuesFromStorageReducer;
