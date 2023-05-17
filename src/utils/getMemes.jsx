import axios from "axios";

const getMemes = async () => {
  try {
    const response = await axios.request(" https://api.imgflip.com/get_memes");

    return response.data.data.memes;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

export default getMemes;
