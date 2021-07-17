import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isServerOn: false,
  showServerStatus: true,
};

const ServerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_SERVER_ONLINE:
      return {
        ...state,
        isServerOn: action.payload,
      };
    case actionTypes.SET_SHOW_SERVER_STATUS:
      return {
        ...state,
        showServerStatus: action.payload,
      };
    default:
      return state;
  }
};

export default ServerReducer;
