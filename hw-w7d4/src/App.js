import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function adder(num1, num2){
    return (<p>The sum of {num1} and {num2} is {num1+num2}</p>)
  }
  return (
    <div className="App">
      {adder(23,48)}
    </div>
  );
}

export default App;
