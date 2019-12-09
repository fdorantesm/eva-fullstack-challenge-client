import axios from 'axios';
import LocalStorage from 'asynkstorage';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.timeout = 15000;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const auth = LocalStorage.getItem('auth');

axios.interceptors.request.use(function (config) {
  if (auth.accessToken) {
      config.headers.common['Authorization'] = `Bearer ${auth.accessToken}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(null, function(error) {
  return Promise.reject(error);
});
  
export default axios;
