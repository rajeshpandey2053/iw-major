import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const headers = {};

// if (localStorage.getItem("token")) {
//   headers["Authorization"] = `Token ${localStorage.getItem("token")}`;
// }

headers["Authorization"] = "Token d150500a215d943e9308e9d41e7dd2b6ecc55791";

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
