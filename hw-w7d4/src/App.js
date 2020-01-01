import React from 'react';
import './App.css';

function Adder(){
  // JS
const num1 = 9;
const num2 = 10;


return(
  <div>     {/* <TAG></TAG> ~> convert from JS to JSX */}

     <p>the sum of number 9 and 10 is:</p> {num1+num2}  {/* {} ~> convert from JSX to JS */}  
  </div>


);

}
function App() {
  return (
    <div className="App">
      <Adder/>
    </div>
    
  );
}

export default App;

