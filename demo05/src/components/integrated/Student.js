import Jumbotron from "../Jumbotron";
import { useCallback, useEffect, useState } from 'react';
import axios from "../utils/CustomAxios.js";

const Student = () => {
    const [ppp, setPPP] = useState([]);

    const loadPPP = useCallback(() => {
        axios({
            url: "/pocketmon/",
            method: "get"
        }).then(response => {
            setPPP(response.data);
            console.log(response);
        });
    }, []);

    useEffect(() => {
        loadPPP();
    }, [loadPPP]);

    return (
        <>
            <h1>학생(사원임) 관리</h1>
            <Jumbotron aaa="사원이삼" bbb="어쩔티비"></Jumbotron>

            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="text-center">
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>속성</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ppp.map(pppp => (
                                <tr key={pppp.pocketmonNo}>
                                    <td>{pppp.pocketmonNo}</td>
                                    <td>{pppp.name}</td>
                                    <td>{pppp.property}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Student;
