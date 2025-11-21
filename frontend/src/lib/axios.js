import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://real-time-chat-app-xbab.onrender.com/api", // <-- use your Render backend URL
  withCredentials: true,
});
