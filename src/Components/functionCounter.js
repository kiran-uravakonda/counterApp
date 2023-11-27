// import './App.css'
import { useState } from "react";
 function Counter1(props){

let [value,setValue]=useState(0);
console.log(value)
let Decrement=()=>{

    if(value!==0)
    {
  setValue(--value)
    }
}


let Increment=()=>{
    setValue(++value)
  }

    return(
        <>
        <h1>{props.element}</h1>
      <div style={{display:"flex"}}>
        <button className="test" onClick={Decrement}>-</button>
        <p>{value}</p>
        <button className="test" onClick={Increment}>+</button>
      </div>
      </>
    )
}

export default Counter1;