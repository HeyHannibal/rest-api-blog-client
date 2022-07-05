import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import { Link, useOutletContext } from "react-router-dom";
import { formatDate } from "../App";

import "../stylesheets/homepage.css";

export default function Homepage() {
  const [articles, setArticles] = useState(false);
  const serverError = useOutletContext();

  useEffect(() => {
    fetch("https://le-bloggo.herokuapp.com/article")
      .then((result) => result.json())
      .then((result) => setArticles(result))
      .catch((err) => {

        serverError("failed to load articles, please try again");
        setArticles({})
        throw err
      });
  }, []);

  return (
    <div id="homepage">
      {articles ? (
        articles.map((article) => (
          <Link key={uniqid()} to={article.url}>
            <article className="articleLink">
              <h2>{article.title}</h2>
              <p className="textbite">{article.body.split(".")[0]}.</p>
              <div className="articlePreview hidden">
                <p className="hiddenText">{article.body.slice(100, 200)}...</p>
                <br></br>
              </div>
              <p className="date">{formatDate(article.date.split("T")[0])}</p>
            </article>
          </Link>
        ))
      ) : (
        <p>Loading articles</p>
      )}
    </div>
  );
}
