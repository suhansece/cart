// apiClient.js
import axios from 'axios';

// Create an instance of axios
const apiClient = axios.create({
  baseURL: 'http://localhost:4000/',
  withCredentials: true // Include credentials
});

// Add a request interceptor to include the cookie token
apiClient.interceptors.request.use(config => {
  if (!config.headers['Cookie']) {
    config.headers['Cookie'] = 'token=your_cookie_token_value';
  }
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

export default apiClient;
