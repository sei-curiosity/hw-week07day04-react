import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    //var num1 = <input id="number" type="number"  />;
  //var num2 =<input id="number2" type="number" />;
   var num1 ;
   var num2;
   var totel;
   
  return (
    <div className="App">
      <h1>Math</h1><hr/>
  <p>First-Number={num1= 5} <br/>Second-Number={num2= 10 }<br/>
  totel:
  {totel =num1+num2}
        </p>
    </div>
  );
}

export default App;
