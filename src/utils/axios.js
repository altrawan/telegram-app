import axios from 'axios';
import { API_URL } from '../helpers/env';

const axiosApiIntances = axios.create({
  baseURL: `${API_URL}`
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Set up config token
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      // jika token nya tidak sesuai sama localstorage / statenya
      if (error.response.data.message === 'jwt expired') {
        localStorage.clear();
        window.location.href = '/login';
      }
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
