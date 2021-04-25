import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
  posts: [],
};

export const GetDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      return {
        ...state,
        posts: action.payload.posts,
      };

    case ActionTypes.ADD_DATA:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };

    case ActionTypes.DELETE_DATA:
      return {
        ...state,
        posts: action.payload.posts,
      };

    default:
      return {
        ...state,
      };
  }
};
