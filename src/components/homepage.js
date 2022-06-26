import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { formatDate } from "../App";
import "../stylesheets/homepage.css";



export default function Homepage() {
  const [articles, setArticles] = useState(false);

  useEffect(() => {
    if (!articles) {
      fetch("https://le-bloggo.herokuapp.com/article")
        .then((result) => result.json())
        .then((result) => setArticles(result));
    }
  });


  return (
    <div id="homepage">
      {articles
        ? articles.map((article) => (
          <Link
            className="articleLink"
            key={uniqid()}
            to={article.url}
          >
            <h2>{article.title}</h2>

            <p className="textbite">{article.body.split(".")[0]}.</p>
            <div className="articlePreview hidden">
              <p className="hiddenText">{article.body.slice(100, 200)}...</p>
              <br></br>
              
            </div>

            <p className="date">{formatDate(article.date.split("T")[0])}</p>
          </Link>
        ))
        : "Loading articles"}
    </div>
  );
}
