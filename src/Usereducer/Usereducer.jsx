import React, { useReducer, useState } from 'react'

 export function function1(state,action){
  switch(action.type){
    case "inc":
        return state+1;
    case "dec":
        return state-1; 
    default:
        return state;       
  }
}

function Usereducer() {

    const [variable,function1]= useState(1);
    const [count,setcount]= useState(1);
    // an alternate way for use state
    const [count1,sercount1] = useReducer(function1,1)
    const [state,dispatch] = useReducer()

    var plus = ()=>{
        // setcount(count+1);
        dispatch({type:"inc"});
    }
    var minus = ()=>{
        // setcount(count-1);
        dispatch({type:"dec"});
    }

    // console.log(count1);
    
  return (
    <>
      <h1>Increment</h1>
      <p>{count}</p>
      <button onClick={plus}>Click me to add</button>
      <button onClick={minus}>Click me to reduce</button>
    </>
  )
}

export default Usereducer