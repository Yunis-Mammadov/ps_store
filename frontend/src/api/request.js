import axios from 'axios';
import { BASE_URL } from './baseURL';

export const signUP = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/register`, payload);
  return response;
};

export const signIN = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/login`, payload);
  return response.data;
};

export const getUsers = async (token) => {
  let users;
  await axios.get(`${BASE_URL}/api/user`, {
    headers: {
      'x-access-token': token
    }
  }).then((res) => {
    users = res.data.data;
  });
  return users;
};
