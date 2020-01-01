import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Adding a number from front end seams a bit involved so instead will define
  // the two numbers here and display their addition on screen
  let num1 = 2;
  let num2 = 3;
  function add(a,b) {
    return a+b    
  }
  return (
    <h1 className="App">
      {num1} + {num2} = {add(num1,num2)}
    </h1>
  )
}

export default App;
