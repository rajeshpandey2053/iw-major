import axios from "axios";

const baseURL = "https://iw-major.vercel.app";
const headers = {};

console.log("I am from axios instance");

// headers["Authorization"] = "Token 908380702491585c7b184b8c7be74999cf1abe0c";

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
