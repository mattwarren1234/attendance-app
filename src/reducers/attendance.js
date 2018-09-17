import {
    SAVE_BY_DAY
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BY_DAY:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    default:
        return state;
    }
  return state;
};
