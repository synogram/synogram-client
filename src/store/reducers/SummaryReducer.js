import * as actionTypes from "../actions/actionTypes";

const initialState = {
  summary: "",
  loading: false,
  error: null,
};

const SummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WORD_SUMMARY_BEGIN:
      return {...state, loading: true};
    case actionTypes.GET_WORD_SUMMARY_SUCCESS:
      return {...state, loading: false, summary: action.summary};
    case actionTypes.GET_WORD_SUMMARY_FAILURE:
      return {...state, loading: false, error: action.err};
    default:
      return state;
  }
};

export default SummaryReducer;
