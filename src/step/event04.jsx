import React, { useState } from 'react'

const Event04 = () => {
    const [inputVal, setInputVal]=useState('');
    const handleChange=(e)=>setInputVal(e.target.value);
    const resetInput=()=>setInputVal('');
  return (
    <>
        <input type="text"
        onChange={handleChange}
         placeholder='키를 눌러보세요' />
        <p>{inputVal}</p>
        <button onClick={resetInput}>reset</button>
    </>
  )
}

export default Event04