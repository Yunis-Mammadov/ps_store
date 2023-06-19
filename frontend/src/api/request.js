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


export const getAllGames = async () => {
     let Games;
     await axios.get(`${BASE_URL}/api/maingames`)
     .then((res) => {
      Games = res.data
     })
     return Games
}

export const getHomeGames = async () => {
     let Games;
     await axios.get(`${BASE_URL}/api/homegames`)
     .then((res) => {
      Games = res.data
     })
     return Games
}

export const getTop10Games = async () => {
     let Games;
     await axios.get(`${BASE_URL}/api/top10Games`)
     .then((res) => {
      Games = res.data
     })
     return Games
}