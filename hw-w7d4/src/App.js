import React from 'react';
import logo from './logo.svg';
import './App.css';
let num1=parseInt(window.prompt("Enter The First Number: "));
let num2=parseInt(window.prompt("Enter The second Number: "));
function Adder(num1,num2){
  return num1+num2
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
  <h3> The Sum Of ({num1}) and ({num2}) is ({Adder(num1,num2)})</h3>
      </header>
     
    </div>
  );
}

export default App;
