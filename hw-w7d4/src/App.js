import React from 'react';
import logo from './logo.svg';
import './App.css';

function Adder() {
  let num1 = 1
  let num2 = 2
  let sum = num1+num2
  return (
    <div>
     <h1>{sum} </h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <Adder></Adder> 
    </div>
  );
}

export default App;
