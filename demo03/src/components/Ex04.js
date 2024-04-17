import React, { useState } from 'react';

function Ex04(){
    
    const[mm, setMM] = useState(655);

    const flexContainerStyle = {
        display: 'flex', // flex 컨테이너로 설정
        alignItems: 'center'
    };

    const handleCorrection = () => {
        const newMM = parseInt(mm.toString().slice(1)); // 첫 번째 숫자를 지우고 나머지를 취함
        setMM(newMM);
    };

    return(

        <>
        <div style={flexContainerStyle}>
        <input value={mm} readOnly type="text" /><p>원</p>
        </div>

        <button onClick={handleCorrection}>정정</button>
        </>
    )
}

export default Ex04;