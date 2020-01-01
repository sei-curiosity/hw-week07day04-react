import React from 'react';
import logo from './logo.svg';
import './App.css';
 
function Adder(){
    let num1 = 5
    let num2 = 10
    let answer = num1+num2
   return(
     
    <h1>The Sum of {num1} and {num2} is { answer }</h1>

   )
}


function App() {
  return (
    <div className="App">

      <Adder/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}



export default App;
