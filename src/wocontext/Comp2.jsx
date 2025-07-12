import React from 'react'
import Comp3 from './Comp3'

function Comp2({sub,Contacts}){
  return (
    <>
    <h1>subject details</h1>
    <ul>
      {sub.map((subs,index)=>{
        return <li key={index}>{subs}</li>
      })
      }
    </ul>
    <Comp3 con={Contacts} />
    </>
  )
}

export default Comp2