import axios from "axios";

const getWords = (level) => {
  const options = {
    method: "GET",
    url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
    params: {
      level: level,
      area: "sat",
    },
    headers: {
      "X-RapidAPI-Key": "ffc983c657mshfed893cc9dc5d5cp1be684jsn618e591f21fd",
      "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export default getWords;
