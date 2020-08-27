import axios from 'axios';

const baseURL = '';
const headers = {};

if (localStorage.getItem('token')) {
    headers['Authentication'] = `Bearer ${localStorage.getItem('token')}`
}


const axiosInstance = axios.create({
    baseURL,
    headers,
});

export default axiosInstance;