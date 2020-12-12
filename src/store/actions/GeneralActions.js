import * as actionType from "./actionTypes";

export const storeSearchWord = (payload) => {
  return {
    type: actionType.STORE_SEARCH_WORD,
    payload: payload,
  };
};
