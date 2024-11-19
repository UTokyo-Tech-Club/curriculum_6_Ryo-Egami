import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (user: { name: string; age: number }) => {
  return axios.post(API_URL, user);
};