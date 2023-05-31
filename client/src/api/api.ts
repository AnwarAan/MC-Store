import axios from 'axios';

export const url = 'http://localhost:3000/v1';

export const getAPI = async (url: string) => {
  const response = await axios.get(url);
  return response;
};

export const postAPI = async (url: string, data: any) => {
  const response = await axios.post(url, data);
  return response;
};

export const updateAPI = async (url: string, data: any) => {
  const result = await axios.put(url, data);
  return result;
};

export default { getAPI, postAPI, updateAPI };
