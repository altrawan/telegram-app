import axios from '../../utils/axios';

export const deleteChat = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`chat/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
