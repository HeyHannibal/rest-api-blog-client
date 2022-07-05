import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { isFirefox, isIE, isMobile } from "react-device-detect";

import AppBackground from "./components/app-background";
import Error from "./components/errorMessage";
import "./stylesheets/App.css";

import gitIcon from "./icons/GitHub-Mark-Light-64px.png";

function App() {
  const [error, setError] = useState({
    failed: false,
    errorMessage: "",
  });

  function serverError(errorMessage) {
    setError({
      failed: true,
      errorMessage,
    });
  }

  return (
    <div className="App">
      <nav>
        <div id="gitIcon">
          <a href="https://github.com/HeyHannibal/">
            <img alt="github profile" src={gitIcon}></img>
          </a>
        </div>
        <div className="links">
          <a href="#">CMS</a>
          <a href="#">Server</a>
          <a href="https://github.com/HeyHannibal/rest-api-blog-client">
            Back to Repo
          </a>
        </div>
      </nav>
      <h1 id="title">
        <Link to="/">The Blog</Link>
      </h1>
      <Error failed={error.failed} errorMessage={error.errorMessage} />
      <Outlet context={serverError} />
      {isFirefox || isIE || isMobile ? null : <AppBackground />}
    </div>
  );
}

const formatDate = (date) => {
  const newDate = new Date(date);
  const formatted = newDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return formatted;
};
export default App;
export { formatDate };
