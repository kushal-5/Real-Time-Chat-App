import axios from "axios";

const backend =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : import.meta.env.VITE_BACKEND_URL || "https://real-time-chat-app-xbab.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${backend}/api`,
  withCredentials: true,
});
