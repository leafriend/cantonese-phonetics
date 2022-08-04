import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="input">
        <textarea placeholder='[&#10;["信", "seon3"]&#10;]'></textarea>
      </div>
      <div className="button">
        <select>
          <option value="Jyutping">粵拼</option>
        </select>
        <button>Convert</button>
        <select>
          <option value="SidneyLau">劉錫祥</option>
        </select>
      </div>
      <div className="output">
      <textarea placeholder='[&#10;["信", "seun"]&#10;]'></textarea>
      </div>
    </div>
  );
}

export default App;
