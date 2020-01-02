import React from "react"
import './App.css';

const num1 = 6
const num2 = 3
const sum =  num1+num2

const Adder = function (){
    return(
        <div>
        {
          <h2> The sum of {num1} & {num2} is {sum} </h2>
        }
     </div>
    )
}


export default Adder; 