import * as actionType from "./actionTypes";

export const storeInitialSearchWord = (payload) => {
  return {
    type: actionType.STORE_INITIAL_SEARCH_WORD,
    payload: payload,
  };
};

export const storeSearchWord = (payload) => {
  return {
    type: actionType.STORE_SEARCH_WORD,
    payload: payload,
  };
};

export const setIsServerOnline = (payload) => {
  console.log(payload);
  return {
    type: actionType.SET_IS_SERVER_ONLINE,
    payload: payload,
  };
};
