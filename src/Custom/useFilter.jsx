import  { useState } from 'react'

function useFilter(names) {
    const [searched,setsearch] = useState('');
    
        const filtered = names.filter((nam)=>
            nam.toLowerCase().includes(searched.toLowerCase())
        );
  return (
      filtered,
      searched,
      setsearch
  )
}

export default useFilter