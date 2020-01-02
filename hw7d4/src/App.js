import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sum from './Sum';
import Adder from './Adder'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Adder />
        {/* <Sum /> */}
         
      </header>
    </div>
  );
}7

export default App;


// Create a New React app. (Refer to the lessons today to see how to create a new React App.)
// After creating a new App. Edit the App.js and add one component with JSX in it.
// Add a function named 'Adder' that adds two numbers.
// In your App component, using the function 'Adder' with JSX render the component as :
// The sum of 'num1' and 'num2' is 'answer'