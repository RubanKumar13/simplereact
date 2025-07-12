import React, { useContext } from 'react'
import { std } from './Wcomp1'
import Wcomp3 from './Wcomp3'


function Wcomp2(){
  const {sub} =useContext(std)
  return (
    <>
    <h1>subject details</h1>
    <ul>
      {sub.map((subs,index)=>{
        return <li key={index}>{subs}</li>
      })
      }
    </ul>
    <Wcomp3 />
    </>
  )
}

export default Wcomp2