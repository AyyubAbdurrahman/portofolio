import axios from "axios";
const API_URL = "http://localhost:8000/api";

export const login = (data) => axios.post(`${API_URL}/login`, data);
export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getUiUx = (project_id) => axios.get(`${API_URL}/uiux/${project_id}`);
// Tambahkan endpoint lain sesuai kebutuhan 