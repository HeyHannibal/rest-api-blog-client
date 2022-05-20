import React, { useState, useEffect } from "react";
import "../stylesheets/background.css";

function AppBackground() {
  const [scroll, setScroll] = useState(0);

  function logScroll() {
    setScroll(window.pageYOffset / 2);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logScroll);
    };
  }, []);

  return (
    <div>
      <div className="blur">
        <div id="cloudsLeft">
          <div className="cloud" id="one"></div>
          <div className="cloud" id="two"></div>
          <div className="cloud" id="three"></div>
          <div id="backgroundLeft"></div>
          <div id="spheresLeft">
            <div className="sphere">
              <div
                id="orbit"
                style={{ transform: `rotate(${scroll}deg)` }}
              ></div>
            </div>
            <div className="sphere"></div>
            <div className="sphere"></div>
          </div>
        </div>

        {/* <div className="cloudsRight">
            <div id='backgroundRight'></div>
            <div className="cloud2" id="one"></div>
            <div className="cloud2" id="two"></div>
            <div className="cloud2" id="three"></div>
            <div>
            <div className="sphere2" id="one"></div>
            <div className="sphere2" id="two"></div>
                  </div>
        </div> */}
      </div>
    </div>
  );
}

export default AppBackground;
