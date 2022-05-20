import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComment from "./postcomment";
import uniqid from "uniqid";
import "../stylesheets/article.css";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(false);
  
  

  useEffect(() => {
    if(!article) {
    fetch(`http://localhost:3001/article/${id}/`)
      .then((result) => result.json())
      .then((result) => setArticle(result));
    }
  });

  return (
    <div id="article">
      {article ? (
        <div id="articleContainer">
          <h2>{article.article.title}</h2>
          <p>{article.article.date.split("T")[0]}</p>
          <p>{article.article.body}</p>
          <PostComment articleId={id} refreshArticle={setArticle}/>
          {article.comments.map((comment) => (
            <div key={uniqid()}>
              <h5>{comment.username}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      ) : (
        "loading article..."
      )}
    </div>
  );
}
