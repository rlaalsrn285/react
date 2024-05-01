import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { seatsState } from './utils/RecoilData';

function Home() {
    const [cellRows, setCellRows] = useState(0);
    const [cellCols, setCellCols] = useState(0);
    const [seats, setSeats] = useRecoilState(seatsState);

    const [rowCheckStatus, setRowCheckStatus] = useState([]);
    const [colCheckStatus, setColCheckStatus] = useState([]);

    useEffect(() => {
        // cellRows와 cellCols의 상태가 변경될 때마다 체크박스 상태 초기화
        setRowCheckStatus(Array(cellRows).fill(false));
        setColCheckStatus(Array(cellCols).fill(false));
    }, [cellRows, cellCols]);
    
    useEffect(() => {
        console.log('seats 상태가 변경되었습니다.', seats);
    }, [seats]);

    const updateCellRows = (e) => {
        setCellRows(Number(e.target.value));
    };

    const updateCellCols = (e) => {
        setCellCols(Number(e.target.value));
    };

    useEffect(() => {
        // 체크박스 상태에 따라 좌석의 활성/비활성 상태 업데이트
        const updatedSeats = [];
        for (let row = 0; row < cellRows; row++) {
            for (let col = 0; col < cellCols; col++) {
                const 활성화상태 = !(rowCheckStatus[row] || colCheckStatus[col]) ? "활성화상태" : "비활성화상태";
                updatedSeats.push({ row: row + 1, col: col + 1, 활성화: 활성화상태 });
            }
        }
        setSeats(updatedSeats);
    }, [rowCheckStatus, colCheckStatus, cellRows, cellCols]);

    const toggleRowCheckBox = (rowIndex) => {
        const updatedRowCheckStatus = [...rowCheckStatus];
        updatedRowCheckStatus[rowIndex] = !updatedRowCheckStatus[rowIndex];
        setRowCheckStatus(updatedRowCheckStatus);
    };

    const toggleColCheckBox = (colIndex) => {
        const updatedColCheckStatus = [...colCheckStatus];
        updatedColCheckStatus[colIndex] = !updatedColCheckStatus[colIndex];
        setColCheckStatus(updatedColCheckStatus);
    };


    

    

    return (
        <>
            <div>
                <label> 셀 행:
                    <input type="number" value={cellRows} onChange={updateCellRows}></input>
                </label>

                <label> 셀 열:
                    <input type="number" value={cellCols} onChange={updateCellCols}></input>
                </label>
            </div>
            <div>
                <table>
                <thead>
    <tr>
        <th></th>
        {Array.from({ length: cellCols }).map((_, colIndex) => (
            <th key={colIndex}>
                {/* Change toggleColStatus to toggleColCheckBox */}
                <input type="checkbox" onChange={() => toggleColCheckBox(colIndex)} />
            </th>
        ))}
    </tr>
</thead>
<tbody>
    {Array.from({ length: cellRows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
            <td>
                {/* Change toggleRowStatus to toggleRowCheckBox */}
                <input type="checkbox" onChange={() => toggleRowCheckBox(rowIndex)} />
            </td>
            {Array.from({ length: cellCols }).map((__, colIndex) => (
                <td key={colIndex} style={{
                    border: '1px solid black',
                    padding: '10px',
                    textAlign: 'center',
                    backgroundColor: seats.find(seat => seat.row === rowIndex + 1 && seat.col === colIndex + 1)?.활성화 === "활성화상태" ? 'yellow' : 'lightgrey',
                }}>
                    {rowIndex + 1}, {colIndex + 1}
                </td>
            ))}
        </tr>
    ))}
</tbody>
                </table>
            </div>

            <div>
                <button><NavLink to='/Asd22'>버튼버튼</NavLink></button>
            </div>
        </>
    );

}

export default Home;