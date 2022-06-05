import axios from '../../utils/axios';
import { GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED } from '../types';

export const getUser = (navigate, limit) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_PENDING,
      payload: null
    });

    const response = await axios({
      method: 'GET',
      url: `user?limit=${limit}`
    });

    dispatch({
      type: GET_USER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        localStorage.clear();
        return navigate('/login');
      }

      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_USER_FAILED,
      payload: error.message
    });
  }
};
