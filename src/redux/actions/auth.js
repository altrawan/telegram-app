import axios from '../../utils/axios';

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`auth/register`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`auth/login`, data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
