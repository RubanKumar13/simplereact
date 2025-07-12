import React, { useCallback, useEffect, useState } from 'react'
import { function1 } from '../Usereducer/Usereducer';

function Callback() {
    const [count,setcount]  = useState(0);
    const [count1,setcount1]  = useState(0);
    // store a fnction into memory
    // const inc =useCallback( ()=>{
    //     setcount(count+1);
    // },[count])
    const inc = ()=>{
        setcount(count+1);
    }


    const inc1 = ()=>{
        setcount1(count1+1);
    }
  function1
    useEffect(()=>{
        console.log("count1 value is canged");
        
    },[inc]);
  return (
     <>
        <h1>UseCallback Function</h1>
        <p>First Count</p>
        <h2>Count 1 is :{count}</h2>
        <button onClick={inc}>Increment</button>
        <p>Second Count</p>
        <h2>Count 2 is :{count1}</h2>
        <button onClick={inc1}>Increment1</button>
     </>
  )
}

export default Callback