import * as actionTypes from "../actions/actionTypes";

const initialState = {
  initialSearchWord: "",
  searchWord: "",
  loading: false,
  error: null,
  wordChain: [],
  isServerOn: false,
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
    case actionTypes.SET_IS_SERVER_ONLINE:
      return {
        ...state,
        isServerOn: action.payload.isServerOn,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
