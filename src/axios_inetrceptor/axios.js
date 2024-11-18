import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || "https://cart-backend-w0hz.onrender.com//api" 
});

export default axiosInstance;
