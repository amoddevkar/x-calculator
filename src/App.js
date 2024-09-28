import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState("")

  const handleCalculateResult = () => {
    if (inputValue == "") return setResult("Error")
    try {
      let result = new Function(`return ${inputValue}`)();
      return setResult(result);
    } catch (error) {
      return setResult("Error");
    }
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <input type='text' value={inputValue} />
      <div>{result}</div>
      <div><button onClick={() => { setInputValue(inputValue + "1") }}>1</button>
        <button onClick={() => { setInputValue(inputValue + "2") }}>2</button>
        <button onClick={() => { setInputValue(inputValue + "3") }}>3</button>
        <button onClick={() => { setInputValue(inputValue + "+") }}>+</button></div>
      <div><button onClick={() => { setInputValue(inputValue + "4") }}>4</button>
        <button onClick={() => { setInputValue(inputValue + "5") }}>5</button>
        <button onClick={() => { setInputValue(inputValue + "6") }}>6</button>
        <button onClick={() => { setInputValue(inputValue + "-") }}>-</button></div>
      <div><button onClick={() => { setInputValue(inputValue + "7") }}>7</button>
        <button onClick={() => { setInputValue(inputValue + "8") }}>8</button>
        <button onClick={() => { setInputValue(inputValue + "9") }}>9</button>
        <button onClick={() => { setInputValue(inputValue + "*") }}>*</button></div>
      <div><button onClick={() => {
        setInputValue("")
        setResult("")
      }}>C</button>
        <button onClick={() => { setInputValue(inputValue + "0") }}>0</button>
        <button onClick={handleCalculateResult}>=</button>
        <button onClick={() => { setInputValue(inputValue + "/") }}>/</button></div>
    </div>
  );
}

export default App;
