import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const headers = {};

if (localStorage.getItem("token")) {
  headers["Authorization"] = `Token ${localStorage.getItem("token")}`;
}

// headers["Authorization"] = "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1";

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
