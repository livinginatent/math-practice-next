import axios from "axios";
import { RegisterData,LoginData } from "@/interfaces";
const API_URL = "http://localhost:5000/api"; // Adjust to your API URL

export const register = (userData:RegisterData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = (userData:LoginData) => {
  return axios.post(`${API_URL}/login`, userData);
};
