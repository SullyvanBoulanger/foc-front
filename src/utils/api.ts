import axios, { AxiosInstance } from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set the JWT in localStorage
export function setJwtToken(token: string): void {
  localStorage.setItem('jwtToken', token);
}

// Function to get the JWT from localStorage
export function getJwtToken(): string | null {
  return localStorage.getItem('jwtToken');
}

api.interceptors.request.use((config) => {
  const token = getJwtToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 403) {
    localStorage.removeItem('jwtToken');
  }
  return Promise.reject(error);
});
