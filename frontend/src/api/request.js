import axios from 'axios';
import { BASE_URL } from './baseURL';

export const signUP = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/user`, payload);
  return response;
};

export const signIN = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/login`, payload);
  return response.data;
};

export const getUsers = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user`, {
      headers: {
        'x-access-token': token
      }
    });
    return response.data.data
  } catch (error) {
    throw error
  }
};
