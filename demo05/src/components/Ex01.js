import { useState } from "react";
import Jumbotron from "./Jumbotron";


function Ex01() {

    const [students, segSTST] = useState([
        { studentNo: 1, studentName: "돼지바", studentScore: 80 },
        { studentNo: 2, studentName: "누가바", studentScore: 90 },
        { studentNo: 3, studentName: "바밤바", studentScore: 100 },
    ]);

    return (
        <>
            <Jumbotron aaa="111번" bbb="1111번내용"></Jumbotron>

            {students.map((student) => (
                <div>
                    <span>{student.studentNo}</span>
                    <span>{student.studentName}</span>
                    <span>{student.studentScore}점</span>
                </div>
            ))}
        </>
    )
}

export default Ex01;