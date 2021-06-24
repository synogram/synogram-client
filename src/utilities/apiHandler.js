import axios from "./axios/axios";

export const getSummaryAPI = (params) => {
  const QUERY_SEARCHWORD = params;

  return axios.get("/api/summary/" + QUERY_SEARCHWORD);
};

export const getRelatedWordsAPI = (params) => {
  const QUERY_SEARCHWORD = params;
  const QUERY_QUANTITY = 15;
  const QUERY = QUERY_SEARCHWORD + "/" + QUERY_QUANTITY;
  return axios.get("/api/query/" + QUERY);
};

export const getDictionaryDefinitionAPI = (params) => {
  const QUERY_SEARCHWORD = params;
  const QUERY_LANG = "en";
  return axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/${QUERY_LANG}/${QUERY_SEARCHWORD}`
  );
};
