// authUtils.ts
import axiosInstance from '../api/AxiosConfig';
import { AxiosInstance } from 'axios';

export const handleLogin = async (
  axiosInstance: AxiosInstance,
  loginEndpoint: string,
  username: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post(loginEndpoint, { username, password });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const handleLogout = async () => {
  try {

    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

