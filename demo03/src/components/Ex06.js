import React, { useMemo, useState } from "react";

function Ex06(){

    const[java, setJava] = useState(0);
    const[react, setReact] = useState(0);
    const[DB, setDB] = useState(0);
    const[design, setDesign] = useState(0);

    const aaa = useMemo(()=>{
        const total = parseInt(java) + parseInt(react) + parseInt(DB) + parseInt(design);
        return total;
    },[java, react, DB, design])

    const bbb = useMemo(()=>{

        const avg = parseInt(aaa) / 4;
        return avg;
    },[aaa])

    return(
        <>
        <h1>성적계산기</h1>
        <br></br>
        자바 <input value={java} onChange={e=>setJava(parseInt(e.target.value))}></input>
        <br></br>
        리액트 <input value={react} onChange={e=>setReact(e.target.value)}></input>
        <br></br>
        DB <input value={DB} onChange={e=>setDB(e.target.value)}></input>
        <br></br>
        디자인 <input value={design} onChange={e=>setDesign(e.target.value)}></input>

        <hr></hr>
        총점 : {aaa} 점
        평균 : {bbb} 점
        </>
    )
}
export default Ex06;