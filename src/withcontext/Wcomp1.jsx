import React from 'react'
import { createContext } from 'react';
import Wcomp2 from './Wcomp2';
const Studentdata={
    sname:"Alex",
    age:27,
    Dep:"cse",
    Contacts:{phoneno:123456789,email:"123@gmail.com"},
    address:"chennai",
    sub:["maths","computer"],
};

export const std =  createContext(Studentdata)
function Wcomp1() {
  return (
    <>
    <std.Provider value={Studentdata}>
    <h1>Studentdetails</h1>
    <h1>{Studentdata.sname}</h1>
    <h1>{Studentdata.age}</h1>
    <Wcomp2/>
    </std.Provider>
   
    </>
  )
}

export default Wcomp1