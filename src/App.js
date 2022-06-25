import Homepage from "./components/homepage";
import "./stylesheets/App.css";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import AppBackground from "./components/app-background";
import gitIcon from "./icons/GitHub-Mark-Light-64px.png";
import { isFirefox, isIE, isMobile } from "react-device-detect";

function App() {
  return (
    <div className="App">
      <nav>
        <div id="gitIcon">
          <a href="https://github.com/HeyHannibal/">
            <img href="#" src={gitIcon}></img>
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
      <h1 id="title"><Link to='/'>The Blog</Link></h1>
      <Outlet />
      {isFirefox || isIE || isMobile ? null : <AppBackground />}
    </div>
  );
}

export default App;
