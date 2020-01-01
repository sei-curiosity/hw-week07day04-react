import React from 'react';
import './App.css';
import Adder from './Adder';
const myFavoriteQoute= ' “The noblest art is that of making others happy.” -P.T. Barnum'
function App() {
  return (
    <div className="App">
<h1> {myFavoriteQoute}</h1>
<Adder/>
    </div>
  );
}

export default App;
