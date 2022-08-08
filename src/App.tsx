import React from 'react';
import './App.scss';
import { convert, Romanisation, RomanisationName } from './convert';

function App() {

  const [input, setInput] = React.useState('');
  const [from, setFrom] = React.useState(Romanisation.Jyutping);
  const [to, setTo] = React.useState(Romanisation.SidneyLau);
  const [result, setResult] = React.useState('');

  function inputChanged(value: string) {
    setInput(value);
  }

  function doConvert(): void {
    const result = convert(input, from, to);
    setResult(result);
  }

  return (
    <div className='App'>

      <div className='input'>
        <textarea
          placeholder='[&#10;["信", "seon3"]&#10;]'
          onChange={(e) => inputChanged(e.target.value)}
          value={input}
        ></textarea>
      </div>

      <div className='actions'>
        <select value={from} onChange={e => setFrom(e.target.value as Romanisation)}>
          {Object.keys(Romanisation).map(key => (
            <option key={key} value={key}>{RomanisationName[key as Romanisation]}</option>
          ))}
        </select>
        <button onClick={_ => doConvert()}>Convert</button>
        <select value={to} onChange={e => setTo(e.target.value as Romanisation)}>
          {Object.keys(Romanisation).map(key => (
            <option key={key} value={key}>{RomanisationName[key as Romanisation]}</option>
          ))}
        </select>
      </div>

      <div className='result'>
        <textarea
          placeholder='[&#10;["信", "sun3"]&#10;]'
          value={result}
          readOnly
        ></textarea>
      </div>

    </div>
  );
}

export default App;
