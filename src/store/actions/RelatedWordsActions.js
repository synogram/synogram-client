import * as actionType from "./actionTypes";
import {getRelatedWordsAPI} from "../../utilities/apiHandler";

export const getRelatedWords = (payload) => {
  return (dispatch) => {
    dispatch(getRelatedWordsBegin(payload));

    return getRelatedWordsAPI(payload)
      .then((res) => {
        const data = res.data.words ? res.data.words : [];
        dispatch(getRelatedWordsSuccess(data));
      })
      .catch((err) => {
        dispatch(getRelatedWordsFailure(err));
      });
  };
};

const getRelatedWordsBegin = (searchword) => {
  return {
    type: actionType.GET_RELATED_WORDS_BEGIN,
    searchWord: searchword,
  };
};

const getRelatedWordsSuccess = (data) => {
  return {
    type: actionType.GET_RELATED_WORDS_SUCCESS,
    res: data,
  };
};

const getRelatedWordsFailure = (err) => {
  return {
    type: actionType.GET_RELATED_WORDS_FAILURE,
    err: err,
  };
};
