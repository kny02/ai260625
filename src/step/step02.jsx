import React from 'react'
import sbs from './step.module.css';

const Step02 = () => {

    //css 작성법
  return (
    <>
        {/* 1. 인라인방식 :  camelCase사용 */}
        <div style={{color:'red', backgroundColor:'blue'}}>인라인 방식</div>
        {/* 2. className 사용 */}
        <div className='red'>App.css에 작성한 스타일</div>
        {/* 3. css모듈 사용 */}
        <div className={sbs.blue}>모듈 사용</div>
        {/* 4. Tailwind css 사용 */}
        <div className='bg-red-500 text-white p-4 mt-2.5 rounded-md'>Tailwind css 사용</div>
    </>
  )
}

export default Step02