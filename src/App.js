import Homepage from './components/homepage';
import './stylesheets/App.css';
import { Outlet, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import AppBackground from './components/app-background'
import gitIcon from './icons/GitHub-Mark-Light-64px.png'

function App() {
  return (
    <div className="App" >
      <nav>
        <div id='gitIcon' ><a  href='https://github.com/HeyHannibal/' ><img href='#' src={gitIcon}></img></a></div>
        <div>
        <a  href='#'>CMS</a>   

        <a  href='#'>Server</a>

        <a  href='https://github.com/HeyHannibal/rest-api-blog-client'>Back to Repo</a>

        </div>
      </nav>
      <h1 id='title'>The Blog</h1>
      <AppBackground/>
      <Outlet />
    </div>
  );
}

export default App;
