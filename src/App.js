import Homepage from './components/homepage';
import './stylesheets/App.css';
import { Outlet, Link } from "react-router-dom";



function App() {


  return (
    <div className="App">
      <h1>The Blog</h1>
      <div class="blur">
        <div id='background'>
        </div>
        <div className='movingElement'></div>
        <div className='movingElement'></div>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
