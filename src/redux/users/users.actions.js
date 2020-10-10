import { GET_USERS_REQUEST } from "./users.types";

export const requestUsers = (amount) => {
  return {
    type: GET_USERS_REQUEST,
    amount,
  };
};
