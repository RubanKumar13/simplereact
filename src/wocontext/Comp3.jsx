import React from 'react'

function Comp3({con:{phoneno,email}}){
  return (
    <>
    <h1>Contact Details</h1>
    <div>{phoneno}</div>
    <div>{email}</div>
    </>
  )
}

export default Comp3