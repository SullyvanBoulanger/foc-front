import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setJwtToken(token: string): void {
  localStorage.setItem('jwtToken', token);
}

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

// api.interceptors.response.use((response) => response, (error) => {
//   if (error.response.status === 403) {
//     localStorage.removeItem('jwtToken');
//   }
//   return Promise.reject(error);
// });
