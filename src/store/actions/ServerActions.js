import * as actionType from "./actionTypes";

export const setIsServerOnline = (payload) => {
  return {
    type: actionType.SET_IS_SERVER_ONLINE,
    payload: payload,
  };
};

export const setShowServerStatus = (payload) => {
  return {
    type: actionType.SET_SHOW_SERVER_STATUS,
    payload: payload,
  };
};
