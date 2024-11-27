import axios from 'axios';

const config = {
  baseURL: `/api`,
  timeout: 60000,
};

const fetch = axios.create(config);

fetch.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { fetch };
