import axios, { AxiosInstance } from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});
