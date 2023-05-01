import axios from "axios";

const getAPI = async (url: string, auth: object) => {
  const response = await axios.get(url, auth);
  return response;
};

const postAPI = async (url: string, data: any) => {
  const response = await axios.post(url, data);
  return response;
};

const updateAPI = async (url: string, data: any) => {
  const result = await axios.put(url, data);
  return result;
};

export default { getAPI, postAPI, updateAPI };
