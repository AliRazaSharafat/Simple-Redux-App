import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDataAction } from "../store/actions/DataAction";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(AddDataAction(title, body));
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={addHandler}> Add Post </button>
    </div>
  );
};

export default AddPost;
