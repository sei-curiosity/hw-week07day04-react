import React from 'react';
import logo from './logo.svg';
import './App.css';
let num1 = 5;
let num2 = 10
const result = num1 + num2
function Adder() {
  return(

  <div>
    <p>The sum of {num1} and {num2} is {result}</p>
    
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Adder/>
      
    
    </div>
  );
}

export default App;
