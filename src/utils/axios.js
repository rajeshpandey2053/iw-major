import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const headers = {};

if (localStorage.getItem("token")) {
  headers["Authentication"] = `Bearer ${localStorage.getItem("token")}`;
}

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
