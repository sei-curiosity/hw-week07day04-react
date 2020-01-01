import React from 'react';
import './App.css';

const num1 = 1
const num2 = 2
const answer = num1+num2

function Adder() {
 
return ( 
  <div>
   
 </div>
);

}


function App() {
  return (
    <div className="App"> 
      The sum of {num1} and {num2} is {answer}
<Adder/> 
    </div>
  );
}

export default App;
