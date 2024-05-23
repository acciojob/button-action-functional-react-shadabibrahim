import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
  const [click,SetClick] = useState(false);

  function displayPara(){
    SetClick(true);
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={displayPara}>Click</button>
     { click && <p ID="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
    </div>
  );
}


export default App;
