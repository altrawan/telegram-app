import axios from '../../utils/axios';

export const register = async (data, setError) => {
  try {
    await axios.post('auth/register', data);
    return true;
  } catch (error) {
    if (error.response) {
      if (error.response.data.code === 422) {
        setError(error.response.data.error);
      } else {
        setError(error.response.data.message);
      }
    } else {
      setError(error.message);
    }
    return false;
  }
};

export const login = async (data, setError) => {
  try {
    await axios.post('auth/login', data);
    return true;
  } catch (error) {
    if (error.response) {
      if (error.response.data.code === 422) {
        setError(error.response.data.error);
      } else {
        setError(error.response.data.message);
      }
    } else {
      setError(error.message);
    }
    return false;
  }
};
