import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const getGitHubUser = async (kpodoNet) => {
  const response = await axios.get(`https://api.github.com/users/${kpodoNet}`, {
    headers: {
      Authorization: API_KEY ? `token ${API_KEY}` : undefined,
    },
  });

  return response.data;
};
