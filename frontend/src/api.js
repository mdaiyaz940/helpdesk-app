import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const createTicket = (data) => API.post("/tickets/new-ticket", data);
export const getUserTickets = () => API.get("/tickets/user");
export const signup = (form) => API.post("/auth/signup", form);
export const login = (form) => API.post("/auth/login", form);
export const forgotPassword = (email) => API.post("/auth/forgot-password", { email });
export const getUserProfile = () => API.get("/auth/profile"); // Needs backend route
export const submitFeedback = (data) => API.post("/auth/feedback", data);
export const logoutUser = () => localStorage.removeItem("token");

export default API;
