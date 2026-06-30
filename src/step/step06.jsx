import React from 'react'

const Step06 = () => {
    //조건문
    const isLogin=true;

    // if(isLogin){
    //     return <h1>로그인되었습니다.</h1>
    // }else{
    //     return <h1>로그인하세요.</h1>
    // }

  return (
    <>
        { /* 2. 삼항연산자*/}
        {isLogin ? <h1>로그인되었습니다.</h1> :  <h1>로그인하세요.</h1> }
        {/* 3. &&연산자 사용 */}
        {isLogin && <h1>로그인되었습니다.</h1>}
    </>
  )
}

export default Step06