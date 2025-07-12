import React from 'react'
import { useState,useMemo } from 'react'

function Usememo() {
    const [item,setitem] = useState([5,3,4,8,1,2,7,12,40]);
    const [sort,setsort] = useState("asc");
    // without use memo 
    // const sorteditem = item.sort((a,b)=>{
    //     console.log("sorting the number");
    //     return sort === "asc" ? a-b : b-a;
    // })

    // with use memo (variables store)
    const sorteditem =useMemo(()=>{
        console.log("sorting the number");
        return item.sort((a,b)=>{
            return sort === "asc" ? a-b : b-a;
        })
    },[item,sort])  
  return (
    <>
    <h1>Usememo Hook</h1>
    <div>{sorteditem}</div>
    <button onClick={()=>setsort(sort === "asc"? "desc":"asc")}>Toggle</button>
    </>
  )
}

export default Usememo