import {useState} from 'react';

function Ex02(){

    const[asd, setAsd] = useState(16);

    return(

        <>
        <h1>2번화면</h1>
        
        <button onClick={e=>setAsd(asd-1)}>마이너스삼</button>
        &nbsp;&nbsp;
        <span>{asd}</span>
        &nbsp;&nbsp;
        <button onClick={e=>setAsd(asd+1)}> 플러스삼 </button>
        </>
    )
}

export default Ex02;