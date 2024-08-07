import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filters = () => {

    let [query,setquery]=useSearchParams()
  return (
    <div>
        <button onClick={()=>setquery({sort:"LTH"})}>LTH</button>
        <button onClick={()=>setquery({sort:"HTL"})}>HTL</button>
        <button onClick={()=>setquery({category:"jewelery"})}>jewelery</button>
        <button onClick={()=>setquery({category:"electronics"})}>electronics</button>
        <button  onClick={()=>setquery("")}>Default</button>
    </div>
  )
}

export default Filters