import axios from "./axios/axios";

export const getSummaryAPI = (params) => {
  // let params = {};
  
  // axios.get("/api/web", params).then((res) => {
  //   console.log(res);
  // });

  return axios.get("/api/query/summary")
};

export const getRelatedWordsAPI = (params) => {  
  const QUERY_SEARCHWORD = params
  const QUERY_QUANTITY = 3;
  const QUERY = QUERY_SEARCHWORD + "/" + QUERY_QUANTITY
  return axios.get("/api/query/" + QUERY)
};

export const getDictionaryDefinitionAPI = (params) => {

}
