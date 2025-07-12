import React, { useEffect, useRef, useState } from 'react'

function Hooks() {
  // use reference hook
  // it is used to acces input field
  // it is used to control useeffect
  const initial = useRef(true)
  console.log(initial);
  
    var product =[ 
    {id:1,pname:"apple",price:"40,000"},
    {id:2,pname:"Moto",price:"40,000"},
    {id:3,pname:"Samsung",price:"40,000"},
    {id:4,pname:"Redmi",price:"40,000"},
    {id:5,pname:"Realme",price:"40,000"},
    {id:6,pname:"oppo",price:"40,000"},
    {id:7,pname:"Nokio",price:"40,000"},
]
    const [count,setcount] = useState(0);
    // console.log(count);

    useEffect(()=>{
      if(initial.current){
        initial.current=false;
        console.log("hi from useeffect");
  
      }
    },[count])

    const inc=()=>{
        setcount(count+1);
    }
    
    const [newproduct,setproduct] = useState(product)
    const [total,settotal] = useState(product.length)
    var eraseall = ()=>{
      setproduct([]);
      settotal(0);
    }

    var erase=(id)=>{
      var v =  newproduct.filter((x)=>x.id !==id);
      setproduct(v);
      settotal(v.length);
    }
    
  return (
    <>
    <h1>count value is :{count} </h1>
    <button class="btn btn-primary" onClick={inc}>increment</button>
    <button class="btn btn-primary">decrement</button>
    <button class="btn btn-primary">reset</button>
    {/* <h1>items in cart:{total}</h1>
     {newproduct.map((v)=>(
      <>
      <div className='card'>
       <p>the product name is:{v.pname}</p> 
       <p>the product price is is:{v.price}</p> 
       <div>

        <button className ="btn btn-danger" onClick={()=>{
          erase(v.id)
        }}>Delete</button>
       </div>
      </div>
      </>
     ))}

     <button className='btn btn-warning' onClick={eraseall} >Deleteall</button>
     <input type="text" ref="initial" /> */}
    </>
  )
}

export default Hooks