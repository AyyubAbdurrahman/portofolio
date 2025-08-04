import axios from "axios";
const API_URL = "/api";

export const login = (data) => axios.post(`${API_URL}/login`, data);
export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getUiUx = (project_id) => axios.get(`${API_URL}/uiux/${project_id}`);