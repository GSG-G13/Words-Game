import axios from "axios";

export const getMemes = async () => {
  try {
    const response = await axios.request(" https://api.imgflip.com/get_memes");
    return response.data;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

export const memeCaption = async (template, topText, bottomText) => {
  const params = {
    template_id: template.id,
    text0: topText,
    text1: bottomText,
    username: "xzk03017",
    password: "xzk03017@cndps.com",
  };
  const response = await fetch(
    `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`
  );
  return response.data;
};
