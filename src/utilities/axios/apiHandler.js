import axios from "axios";

export const getSummary = (word) => {
  axios.get(`http://127.0.0.1:5000/api/summary/${word}`).then((res) => {
      console.log(res.data)
      return res.data
  });
  // return `TODO: IMPLEMENT GET SUMMARY ${params}`;
};

export const getRelatedWords = (word, dim) => {
  axios.get(`http://127.0.0.1:5000/api/query/${word}/2`).then((res) => {
      console.log(res.data)
      return res.data
  });
  // return `TODO: IMPLEMENT GET RELATED WORDS`;
};
