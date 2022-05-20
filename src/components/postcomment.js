import React, { useState } from "react";

export default function PostComment(props) {
  const [comment, setComment] = useState({
    username: "",
    body: "",
  });

  function updateComment(e) {

    const { value } = e.currentTarget
    console.log(value);
    setComment((prev) => ({
      ...prev,
       [e.target.id]: value,
    }));
  }

  const [errorMessage, setErrorMessage] = useState(false);

  async function post(e) {
    e.preventDefault();
    try {
      let res = await fetch(
        `http://localhost:3001/article/${props.articleId}/comment/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );
      if (res.status === 200) {
        props.refreshArticle()
      } else
        setErrorMessage(
          `An error has occured, please try again - ${res.status}`
        );
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <form onSubmit={post} id="comment">
      {errorMessage ? <p>{errorMessage}</p> : null}
      <label htmlFor="username">
        <p>Username</p>
        <input
          type="text"
          id="username"
          value={comment.username}
          onChange={updateComment}
        ></input>
      </label>
      <label htmlFor="body">
        <p>Comment</p>
        <textarea
          id="body"
          value={comment.body}
          onChange={updateComment}
        ></textarea>
      </label>
      <button type="submit">Post</button>
    </form>
  );
}
