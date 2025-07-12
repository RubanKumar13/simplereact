import React from 'react'
import { useState } from 'react';

function Custom() {

    const names = ['alice','bob','charlie','tonystark','tony','tirumalai'];
    const [searched,setsearch] = useState('');

    const filtered = names.filter((nam)=>
        nam.toLowerCase().includes(searched.toLowerCase())
    );

  return (
    <>
       <h1>Custom hooks</h1>
       <input type="text" placeholder='search name' value={searched} onChange={(e)=>setsearch(e.target.value)} />
       <h2>Filtered Names</h2>
       <div>
        {
            filtered.map((names,index)=>(
                <p key={index} >{names}</p>
            ))
        }
        </div> 
    </>
  )
}

export default Custom