import {
  GET_DETAIL_RECEIVER_PENDING,
  GET_DETAIL_RECEIVER_SUCCESS,
  GET_DETAIL_RECEIVER_FAILED
} from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null
};

const detailReceiver = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_RECEIVER_PENDING:
      return { ...state, isLoading: true };
    case GET_DETAIL_RECEIVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case GET_DETAIL_RECEIVER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default detailReceiver;
