import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isServerOn: false,
};

const ServerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_SERVER_ONLINE:
      return {
        ...state,
        isServerOn: action.payload,
      };
    default:
      return state;
  }
};

export default ServerReducer;
