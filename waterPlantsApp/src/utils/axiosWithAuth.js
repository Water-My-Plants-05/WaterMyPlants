import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: '' // put URL here when deployed to Heroku
  });
}

export default axiosWithAuth;