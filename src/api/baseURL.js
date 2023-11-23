import axios from "axios";
import { store } from "../store/store";

const axiosBaseUrl = "http://localhost:7000";
axios.defaults.baseURL = axiosBaseUrl; 

axios.interceptors.request.use(
  function (config) {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;