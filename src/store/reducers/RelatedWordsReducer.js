import * as actionTypes from "../actions/actionTypes";

const initialState = {
  relatedWords: [],
  loading: false,
  error: null,
};

const RelatedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RELATED_WORDS_BEGIN:
      const rootNode = [
        {
          name: action.searchWord,
        },
      ];
      return {...state, loading: true, error: null, relatedWords: rootNode};
    case actionTypes.GET_RELATED_WORDS_SUCCESS:
      const words = action.res.map((element) => {
        return {
          name: element,
        };
      });

      const relatedWords = state.relatedWords;
      relatedWords[0].children = words;
      return {...state, loading: false, relatedWords: relatedWords};
    case actionTypes.GET_RELATED_WORDS_FAILURE:
      return {...state, loading: false, error: action.err};
    default:
      return state;
  }
};

export default RelatedWordsReducer;
