import axios from 'axios';

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: 'https://wedding-card-be.onrender.com',
  headers: {
    // athorName: "syket",
    token: `Bearer ${token}`,
  },
});

export default axiosInstance;
