import React, { useState } from 'react';
import AppCss from "./App.css";

const App = () => {
  const [anim, setAnim] = useState(false);

  return (
    <div className="App">
      <div className={`box ${anim ? "animation" : ""}`}></div>
      <div className="text-center">
        <button 
          type="button" 
          className="btn btn-outline-danger mt-5" 
          onClick={() => setAnim(!anim)} >
          CLASS TOGGLE
        </button>
      </div>
    </div>
  )
}
export default App;
