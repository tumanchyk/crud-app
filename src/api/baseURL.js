import axios from "axios";

const axiosBaseUrl = "http://localhost:7000";

axios.defaults.baseURL = axiosBaseUrl; 

export default axios;