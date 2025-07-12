import React, { useContext } from 'react'
import { std } from './Wcomp1'

function Wcomp3(){
   const{Contacts:{phoneno,email}} =useContext(std)
  return (
    <>
    <h1>Contact Details</h1>
    <div>{phoneno}</div>
    <div>{email}</div>
    </>
  )
}

export default Wcomp3