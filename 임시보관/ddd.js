import { useCallback, useEffect, useState } from "react";
import axios from "./utils/CustomAxios"


const Digimon = () => {

    const [digimons, setDigimons] = useState([]);

    const loadDigimon = useCallback(async () => {
        const response = await axios.get("/digimon/");
        setDigimons(response.data);
    }, [digimons]);

    useEffect(() => {
        loadDigimon();
    }, []);

    const [input, setInput] = useState({
        digimonName : "",
        digimonLevel : "",
        digimonAttribute : "",
    });

    const inputChange = useCallback((e)=>{
        setInput

    },[input])
    return (
        <>
            <h1>방가</h1>

            <div className="row mt-4">
                <div className="col">
                    <div className="text-center">
                        <button type="button" className="btn btn-success"
                            data-bs-toggle="modal" data-bs-target="#modalmodal">등록</button>
                    </div>
                    <table className="table">
                        <thead className="text-center">
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>등급</th>
                                <th>속성</th>
                                <th>버튼</th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {digimons.map(digimon => (
                                <tr key={digimon.digimonNo}>
                                    <td>{digimon.digimonNo}</td>
                                    <td>{digimon.digimonName}</td>
                                    <td>{digimon.digimonLevel}</td>
                                    <td>{digimon.digimonAttribute}</td>
                                    <td><button className="btn btn-danger">삭제</button>
                                        <button className="btn btn-primary">수정</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>디지몬 이름</label>
                    <input type="text" className="form-control"
                    value={input.digimonName}
                     onChange={e => inputChange (e)}></input>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>디지몬 등급</label>
                    <input type="text" className="form-control"
                    value={input.digimonLevel}></input>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label>디지몬 속성</label>
                    <input type="text" className="form-control"
                    value={input.digimonAttribute}></input>
                </div>
            </div>

            <div className="row -mt-4">
                <div className="col text-center">
                    <button className="btn btn-info"
                        >등록</button>
                    <button className="btn"
                        >취소</button>
                </div>
            </div>


            <div className="modal fade" id="modalmodal" tabindex="-1" aria-labelledby="digimonMMM" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="digimonMMM">디지몬 등록</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">



                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">등록</button>
                            <button type="button" className="btn btn-primary">취소</button>
                        </div>

                    </div>
                </div>
            </div>

            

        </>
    )
};

export default Digimon;