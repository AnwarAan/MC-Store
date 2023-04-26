import axios from "axios";

const getProductAPI = async (url: string) => {
  const response = await axios.get(url, { auth: { username: "mcnwr", password: "mcnwr76" } });
  return response;
};

export default { getProductAPI };
