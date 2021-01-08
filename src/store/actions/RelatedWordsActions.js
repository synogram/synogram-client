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

export const addRelatedWords = (payload) => {
  return (dispatch) => {
    dispatch(addRelatedWordsBegin());

    return getRelatedWordsAPI(payload)
      .then((res) => {
        const data = res.data.words ? res.data.words : [];
        dispatch(addRelatedWordsSuccess(data, payload));
      })
      .catch((err) => {
        dispatch(addRelatedWordsFailure(err));
      });
  };
};

const addRelatedWordsBegin = () => {
  return {
    type: actionType.ADD_RELATED_WORDS_BEGIN,
  };
};

const addRelatedWordsSuccess = (data, searchWord) => {
  return {
    type: actionType.ADD_RELATED_WORDS_SUCCESS,
    res: data,
    searchWord: searchWord,
  };
};

const addRelatedWordsFailure = (err) => {
  return {
    type: actionType.ADD_RELATED_WORDS_FAILURE,
    err: err,
  };
};
