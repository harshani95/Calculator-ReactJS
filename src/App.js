import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const keypadClick = (e) => {
      setResult(result.concat(e.target.name));
  }

  const clear = (e) => {
    setResult("");
  }

  const back = (e) => {
    setResult(result.slice(0, result.length-1));
  }

  const calculate = (e) => {
    try{
      setResult(eval(result).toString());
    } catch(err){
      setResult("Error")
    } 
  }

  return (
    <>
    <div className='container'>
      <form>
        <input type='text' value={result}></input>
      </form>

        <div className='keypad'>
          <button className="highlight" onClick={clear} id='clear'>Clear</button>
          <button className="highlight" onClick={back} id='back'>C</button>
          <button className="highlight" name="/" onClick={keypadClick}>&divide;</button>
          <button name="7" onClick={keypadClick}>7</button>
          <button name="8" onClick={keypadClick}>8</button>
          <button name="9" onClick={keypadClick}>9</button>
          <button className="highlight" name="*" onClick={keypadClick}>&times;</button>
          <button name="4" onClick={keypadClick}>4</button>
          <button name="5" onClick={keypadClick}>5</button>
          <button name="6" onClick={keypadClick}>6</button>
          <button className="highlight" name="-" onClick={keypadClick}>&ndash;</button>
          <button name="1" onClick={keypadClick}>1</button>
          <button name="2" onClick={keypadClick}>2</button>
          <button name="3" onClick={keypadClick}>3</button>
          <button className="highlight" name="+" onClick={keypadClick}>+</button>
          <button name="0" onClick={keypadClick}>0</button>
          <button className="highlight" name="." onClick={keypadClick}>.</button>
          <button className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div> 
    </>
  );
}

export default App;