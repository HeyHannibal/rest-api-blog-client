import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComment from "./postcomment";
import uniqid from "uniqid";
import "../stylesheets/article.css";
import { formatDate } from "../App";
export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(false);



  useEffect(() => {
    if (!article) {
      fetch(`https://le-bloggo.herokuapp.com/article/${id}/`)
        .then((result) => result.json())
        .then((result) => setArticle(result));
    }
  });

  return (
    <main>
      {article ? (
        <div>
          <article id="articleContainer">
            <h2>{article.article.title}</h2>
            <p>{formatDate(article.article.date.split("T")[0])}</p>
            <p>{article.article.body}</p>
          </article>
          <PostComment articleId={id} refreshArticle={setArticle} />
          <section id='comments'>
            {article.comments.map((comment) => (
              <ul id='comments' key={uniqid()}>
                <li>
                  <h5>{comment.username}</h5>
                  <p>{comment.body}</p>
                </li>
              </ul>
            ))}
          </section>
        </div>

      ) : (
        "loading article..."
      )}
    </main>
  )
}
