import axios from 'axios';

const token = sessionStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_BASE_URL ,
  headers: {
    // athorName: "syket",
    authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
