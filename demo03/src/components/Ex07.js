import { useMemo, useState } from "react";


function Ex07(){

    const [score, setScore] = useState({
        java : 0,
        react : 0,
        db : 0,
        design : 0,
        
    });

    const total = useMemo(()=>{
        return score.java + score.react+ score.db +  score.design;
    } , [score])

    const avg = useMemo(()=>{
        return total  / 4;
    } , [total])
    
    const changeSS = (e)=>{

        const name = e.target.name;
        const value = parseInt(e.target.value);
        setScore({
            ...score,
            [name] : value
        });
    };

    return(

        <>
        <h1>7번 객체 state</h1>
        자바 <input name="java" type="text" value={score.java} onChange={changeSS}></input>
        리액 <input name="react" type="text" value={score.react} onChange={changeSS}></input>
        디비 <input name="db" type="text" value={score.db} onChange={changeSS}></input>
        디자 <input name="design" type="text" value={score.design} onChange={changeSS}></input>
        <br></br>
        총점 : {total}
        <br/>
        평균 : {avg}
        </>
    )
}

export default Ex07;