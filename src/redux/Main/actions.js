/* eslint-disable */
import types from "./types";

const setUser = (user) => ({
  type: types.USER,
  status: "success",
  payload: {
    user: user,
  },
});

export default {
  setUser,
};
