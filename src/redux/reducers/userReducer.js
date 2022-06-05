import { GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED } from '../types';

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default userDetailReducer;
