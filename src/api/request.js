import { BASE_URL } from 'config/apiConfig';
import axios from 'axios';

const request = ({ path, successAction, opts = {} }) => {
  axios({
    url: `${BASE_URL}/${path}`,
    ...opts,
    headers: {
      authorization: localStorage.getItem('taskerToken'),
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      successAction(res.data);
    })
    .catch(error => {
      console.error(error)
    });
};

export default request;
