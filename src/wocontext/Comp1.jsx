import React from 'react'
import Comp2 from './Comp2';

const Studentdata={
    sname:"Alex",
    age:27,
    Dep:"cse",
    Contacts:{phoneno:123456789,email:"123@gmail.com"},
    address:"chennai",
    sub:["maths","computer"],
};


function Comp1() {
  return (
    <>
    <h1>Studentdetails</h1>
    <h1>{Studentdata.sname}</h1>
    <h1>{Studentdata.age}</h1>
    <Comp2 {...Studentdata} />
    </>
  )
}

export default Comp1