import React, { useEffect, useState } from 'react'

const Event05 = () => {
//스크롤 이벤트
  const [scrollY,setScrollY]=useState(0);

  useEffect(()=>{
    const handleScroll=()=>setScrollY(Window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll',handleScroll);
  },[])

  return (
    <div className='h-[2000px]'>
        <div className='fixed top-0 left-0'>
            <p>px</p>
        </div>
    </div>
  )
}

export default Event05