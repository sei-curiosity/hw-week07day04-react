import React from 'react';
//import logo from './logo.svg';
import './App.css';


function App() {
  let num1 = 3
  let num2 = 4
  let Adder = (num1, num2) => num1 + num2
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hi this is Shahad</h1>
        <h2>The Sum of {num1} and {num2} is {Adder(3,4)}</h2>
      </header>
    </div>
  );
}

export default App;
