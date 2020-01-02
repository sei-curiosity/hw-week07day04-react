import React from "react"
import './App.css';


// const sum1 = function (num1 , num2 ) {
//     let sumition = num1+num2 
//     return(
  
//   <p> {sumition} </p>
//    <h1>222</h1>
  
//      }

const Sum = function (){
 
return(
       
    <div>
        
    <div id="content">
    <h1>Sumtion Form</h1>

    {/* <form onSubmit={sum1} > */}
        <p>
            <label for="username" > Number 1:
                <span class="required">*</span>
            </label>
            <input type="number" name="username" id="num1" required="required" placeholder="Your number" />
        </p>
        <p>
            <label for="username" > Number 2:
                <span class="required">*</span>
            </label>git 
            <input type="number" name="username" id="num2" required="required" placeholder="Your number" />
        </p>
        <p class="indication">Fields with
            <span class="required"> * </span>are required</p>

        <input type="submit" value="sum"  />
    {/* </form> */}
       

    </div>
       
       
    </div>
    );
}

export default Sum; 
