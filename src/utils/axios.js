import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const headers = {};

console.log("I am from axios instance");

// headers["Authorization"] = "Token 908380702491585c7b184b8c7be74999cf1abe0c";

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
