import axios from "axios";
import * as ActionTypes from "./ActionTypes";

export const GetDataAction = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: ActionTypes.GET_DATA, payload: { posts: res.data } });
    console.log("Res", res);
  } catch (error) {
    console.log("Error", error);
  }
};

export const AddDataAction = (title, content) => async (dispatch) => {
  const body = {
    title: title,
    body: content,
    userId: 1,
  };
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    console.log("Add Action Res", res);
    dispatch({ type: ActionTypes.ADD_DATA, payload: { post: res.data } });
  } catch (error) {
    console.log("Add Data Error", error);
  }
};

export const DeleteDataAction = (id, posts) => async (dispatch) => {
  try {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    console.log("Delete Action Res", res);
    const updatedPosts = posts.filter((post) => post.id !== id);
    dispatch({
      type: ActionTypes.DELETE_DATA,
      payload: { posts: updatedPosts },
    });
  } catch (error) {
    console.log("Delete Action Error", error);
  }
};
