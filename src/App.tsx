import React from 'react';
import './App.scss';

function App() {

  const [input, setInput] = React.useState('');
  const [from, setFrom] = React.useState('Jyutping');
  const [to, setTo] = React.useState('SidneyLau');
  const [result, setResult] = React.useState('');

  function inputChanged(value: string) {
    setInput(value);
  }

  function convert(): void {
    const result = input;
    console.log(`Convert ${from} to ${to}`);
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
        <select value={from} onChange={e => setFrom(e.target.value)}>
          <option value='Jyutping'>粵拼</option>
        </select>
        <button onClick={_ => convert()}>Convert</button>
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value='Jyutping'>粵拼</option>
          <option value='SidneyLau'>劉錫祥</option>
        </select>
      </div>

      <div className='result'>
        <textarea
          placeholder='[&#10;["信", "seun"]&#10;]'
          value={result}
          readOnly
        ></textarea>
      </div>

    </div>
  );
}

export default App;
