import React from 'react';
import './App.css';


function adder() {
  let num1 = 100
  let num2 = 300
  return num1 + num2 

}
function App() {



  return (
    <div className="App">
      <h1>  The sum of 'num1' and 'num2' is {adder()} </h1>  
    </div>
  );
}

export default App;
