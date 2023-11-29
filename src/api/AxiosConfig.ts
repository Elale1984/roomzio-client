// axiosConfig.ts
import axios, { AxiosInstance } from 'axios';

const AxiosConfig: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosConfig;
