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


        </>
    )
};

export default Digimon;