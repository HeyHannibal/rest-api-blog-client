import Homepage from './components/homepage';
import './stylesheets/App.css';
import { Outlet, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import AppBackground from './components/app-background'

function App() {
  return (
    <div className="App" >
      <h1 id='title'>The Blog</h1>
      <AppBackground/>
      <Outlet />
    </div>
  );
}

export default App;
