import * as actionTypes from "../actions/actionTypes";

const initialState = {
  initialSearchWord: "",
  searchWord: "",
  loading: false,
  error: null,
  wordChain: [],
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.searchWord,
      };
    case actionTypes.STORE_INITIAL_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.searchWord,
        initialSearchWord: action.payload.searchWord,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
