import React, { useState } from 'react'

const Event02 = () => {
    const [msg,setMsg]=useState('마우스');
    
    const handleMouseOver=()=>setMsg(' 마우스호버');
    const handleMouseOUT=()=>setMsg(' 마우스아웃');
  return (
    <>
        {/*버블링 발생 */}
        <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOUT}>
            {msg}
        </p>
        <p onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOUT}>
            {msg}
        </p>
    </>
  )
}

export default Event02