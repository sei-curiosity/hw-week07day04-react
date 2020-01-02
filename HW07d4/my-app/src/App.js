import React from 'react';
// import logo from './logo.svg';
import './App.css';
//NEW function called Adder
//return (<div> <><><><><> </div>)
function Adder (x,y) {
  return (x+y)
}
function App() {
  let x = 100
  let y = 50
  let total

  return (

    <div className="App">
      <h1></h1>
<p>First number {x}, Second number{y}<br/> total = {Adder(x, y)}</p> 

    </div>
  );
}

export default App;
