import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./users.types";

const getInitialState = () => {
  return {
    isLoading: false,
    data: [],
    error: false,
  };
};

const initialState = getInitialState();

const users = (state = initialState, action) => {

  const types = {
    [GET_USERS_REQUEST]: () => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    [GET_USERS_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      error: false,
      data: action.data,
    }),
    [GET_USERS_FAILURE]: () => ({
      ...state,
      isLoading: false,
      error: true,
      data: [],
    }),
  };

  if (!types[action.type]) {
    return state;
  }

  return types[action.type]();
};

export default users;
