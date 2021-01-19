import * as actionTypes from "../actions/actionTypes";

const initialState = {
  relatedWords: [],
  loading: false,
  error: null,
};

const RelatedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RELATED_WORDS_BEGIN:
      return {...state, loading: true, error: null};
    case actionTypes.GET_RELATED_WORDS_SUCCESS:
      return {...state, loading: false, relatedWords: action.res};
    case actionTypes.GET_RELATED_WORDS_FAILURE:
      return {...state, loading: false, error: action.err};
    default:
      return state;
  }
};

export default RelatedWordsReducer;
