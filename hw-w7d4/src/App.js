import React from 'react';
import logo from './logo.svg';
import './App.css';
function Adder() {
  let names = ["meshal","nader","rassam","fahad"]
  let num1=101
  let num2=305
  return(
  <div>
 <ul>
  {names.map( name => <li>{name}</li> )}
 </ul>
  <h1>the sum of {num1} and {num2} is {num1 + num2}</h1>
  </div>
  );
}
function App() {
  return (
    <div>
      <Adder/>
    </div>
  );
}

export default App;
