import { useCallback, useState } from "react"


function Ex04() {

    const [countries, setCountries] = useState([
        { no: 1, name: "한국", capital: "서울" },
        { no: 2, name: "미국", capital: "워싱턴" },
        { no: 3, name: "일본", capital: "도쿄" },
        { no: 4, name: "중국", capital: "베이징" },
        { no: 5, name: "영국", capital: "런던" },
    ])

    const deleteAll = (e) => {
        setCountries([]);
    };

    const dddd = (ppp)=>{

        const searchItems = countries.filter((country)=>country.name !== ppp.name);
        setCountries(searchItems);
    }

    const [input, setInput] = useState(
        {no : "", name : "", capital : ""}
    );

    const changeInput = useCallback((e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name] : value
        });
    },[input]);

    const clearInput = useCallback(()=>{
        setInput({no : "", name : "", capital : ""});
    },[input]);

    const saveInput = useCallback(()=>{
        const copyInput = {...input};
        const copyCountries = [...countries, copyInput];

        setCountries(copyCountries);

        setInput({no : "", name : "", capital : ""});
    },[input,countries])

    return (
        <>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <button className="btn btn-danger"
                            onClick={deleteAll}>전체삭제</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">

                        <table className="table">
                            <thead className="text-center">
                                <tr>
                                    <th>번호</th>
                                    <th>이름</th>
                                    <th>가격</th>
                                    <th></th>                                    
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {countries.map((country) => (
                                    <tr key={country.name}>

                                        <td>{country.no}</td>
                                        <td>{country.name}</td>
                                        <td>{country.capital}</td>
                                        <td><button className="btn btn-danger"
                                            onClick={e => dddd(country)}>삭제</button></td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col">
                    <label>번호</label>
                    <input type="text" className="form-control" name="no"
                     value={input.no} onChange={e=>changeInput(e)}/>
                </div>

                <div className="col">
                    <label>국가</label>
                    <input type="text" className="form-control" name="name"
                     value={input.name} onChange={e=>changeInput(e)}/>
                </div>

                <div className="col">
                    <label>수도</label>
                    <input type="text" className="form-control" name="capital"
                     value={input.capital} onChange={e=>changeInput(e)}/>
                </div>

                <div className="row mt-4">
                        <div className="col text-end">
                            <button className="btn btn-success"
                             onClick={e=>saveInput()}>저장</button>
                            <button className="btn btn-danger ms-2"
                             onClick={e=>clearInput()}>취소</button>
                        </div>

                </div>
                

            </div>
        </>
    )
}

export default Ex04;