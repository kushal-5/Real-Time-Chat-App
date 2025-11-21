import axios from "axios";

const backend =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : import.meta.env.VITE_BACKEND_URL || "https://real-time-chat-app-xbab.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${backend}/api`,
  withCredentials: true,
});

// If a token exists in localStorage, set Authorization header so requests work
// on clients where cookies may be blocked.
const savedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
if (savedToken) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
}
