import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const headers = {};

// if (localStorage.getItem("token")) {
//   headers["Authentication"] = `Bearer ${localStorage.getItem("token")}`;
// }

headers["Authorization"] = "Token 30fe0037864cbfaf7fff73ec3e3e9ccf5eb79116";
const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
