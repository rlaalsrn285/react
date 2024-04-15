import { useState } from "react";

function Ex03(){
   
    const[size, setSize] = useState(300);

    const imageStyle = {
        width: size,
        height: size,
        transition: "width 0.5s, height 0.5s" // 애니메이션 효과를 위한 transition 속성 추가
    };

    return(
        <>
        <button onClick={e=>setSize(150)}>작게150</button>
        <button onClick={e=>setSize(300)}>작게300</button>
        <button onClick={e=>setSize(450)}>작게450</button>
        <br>
        </br>
        <img src="https://picsum.photos/id/1001/500/500" 
         style={imageStyle}/>
        <hr/>

        <input type="range" min={150} max={450} value={size}
        onChange={e=>setSize(parseInt(e.target.value))}/>
        {size}

        
        </>
    )
}

export default Ex03;