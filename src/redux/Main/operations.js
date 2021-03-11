/* eslint-disable */
import actions from "./actions";

const setUser = (user) => {
  return (dispatch) => {
    return dispatch(actions.setUser(user));
  };
};

export default {
  setUser,
};
