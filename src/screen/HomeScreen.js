import React, { useEffect } from "react";
import AddPost from "../component/AddPost";
import { GetDataAction, DeleteDataAction } from "../store/actions/DataAction";
import { useSelector, useDispatch } from "react-redux";

const HomeScreen = () => {
  const { posts } = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDataAction());
  }, []);

  const updateHandler = () => {};

  const deleteHandler = (id) => {
    dispatch(DeleteDataAction(id, posts));
  };

  return (
    <div>
      <h5 style={{ textAlign: "center" }}>Home Screen</h5>
      <AddPost />
      <ul>
        {posts.map((post) => (
          <div key={post.id} style={{ display: "flex" }}>
            <li style={{ margin: 10 }}> {post.title} </li>
            <button onClick={() => updateHandler(post.id)}>update</button>
            <button onClick={() => deleteHandler(post.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
