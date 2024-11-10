import React from 'react'
import { useState } from 'react'

function 
Counter() {
const [count,setcount]=useState(0)

  return (
    <>
    <p>Current Count: {count}</p>
    <button onClick={()=>setcount(count+1)}>increment</button>
    <button onClick={()=>setcount(count-1)}>decrement</button>
    <button onClick={()=>setcount(0)}>Reset</button>
    </>
  );
}


export default Counter