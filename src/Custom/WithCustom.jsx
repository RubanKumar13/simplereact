import React from 'react'
import useFilter from './useFilter';

function WithCustom() {

    const names = ['alice','bob','charlie','tonystark','tony','tirumalai'];
    const{filtered,searched,setsearch} = useFilter(names);   
  return (
    <>
       <h1>Custom hooks</h1>
       <input type="text" placeholder='search name' value={searched} onChange={(e)=>setsearch(e.target.value)} />
       <h2>Filtered Names</h2>
       <div>
        {
           filtered.map((n,index)=>(
            <p key={index}>{n}</p>
           ))
        }
        </div> 
    </>
  )
}

export default WithCustom