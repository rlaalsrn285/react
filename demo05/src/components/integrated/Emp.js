import { useCallback, useEffect, useState } from "react";
import Jumbotron from "../Jumbotron";
import axxios from "axios";

const Emp = () => {

    useEffect(() => {
        loadEmp();
    }, [])
    const [emps, setEmps] = useState([]);

    const loadEmp = useCallback(() => {
        axxios({
            url: "http://localhost:8080/emp/",
            method: "get",
        }).then(asd => {
            setEmps(asd.data);
        })
    }, [emps])

    const [input, setInput] = useState({

        empName: "",
        empDate: "",
        empDept: "",
        empSal: "",
    });

    const changeValue = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...input,
            [name]: value
        });
    }, [input])

    const addEmp = useCallback(() => {
        axxios({
            url: "http://localhost:8080/emp/",
            method: "post",
            data: input,
        }).then((response) => {
             // 서버로부터의 응답 처리
        console.log(response.status); // 응답 상태코드
        console.log(response.data); // 응답 본문

        // 서버로부터의 응답이 500인 경우
        if (response.status === 500) {
            console.log(response.data); // "에러삼 서버" 출력
        }

        // 나머지 동작 수행
        loadEmp();
        cancelInput();
    }).catch((error) => {
        // 에러 처리
        console.error(error);
    });
    })

    const cancelInput = useCallback(() => {
        setInput({
            empName: "",
            empDate: "",
            empDept: "",
            empSal: "",
        });
    }, [input]);


    return (
        <>
            <div className="text-center">
                <Jumbotron aaa="사원" bbb="사원사원"></Jumbotron>
            </div>

            <div className="row">
                <div className="col">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>부서</th>
                                <th>월급</th>
                                <th>날짜</th>
                                <th>버튼</th>
                            </tr>
                        </thead>

                        <tbody>
                            {emps.map(eee => (
                                <tr key={eee.empNo}>
                                    <td>{eee.empNo}</td>
                                    <td>{eee.empName}</td>
                                    <td>{eee.empDept}</td>
                                    <td>{eee.empSal}</td>
                                    <td>{eee.empDate}</td>
                                    <td><button className="btn btn-dark">삭제</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>이름</label>
                    <input type="text" name="empName" value={input.empName}
                        className="form-control" onChange={e => changeValue(e)} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>부서</label>
                    <input type="text" name="empDept" value={input.empDept}
                        className="form-control" onChange={e => changeValue(e)} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>월급</label>
                    <input type="text" name="empSal" value={input.empSal}
                        className="form-control" onChange={e => changeValue(e)} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>날짜</label>
                    <input type="date" name="empDate" value={input.empDate}
                        className="form-control" onChange={e => changeValue(e)} />
                </div>
            </div>

            <div className="row -mt-4">
                <div className="col text-center">
                    <button className="btn btn-info"
                        onClick={e => addEmp()}>등록</button>
                    <button className="btn btn-success"
                    onClick={e => cancelInput()}>취소</button>
                </div>
            </div>
        </>
    )
};

export default Emp;