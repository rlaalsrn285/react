import { useRecoilState } from "recoil";
import { seatsState } from './utils/RecoilData';
import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'bootstrap';

function Asd99() {
    const [seats, setSeats] = useRecoilState(seatsState);

    let modalInstance = useRef(null);
    useEffect(() => {
        modalInstance.current = new Modal(document.getElementById('exampleModal'), {
            // 필요한 옵션들
        });
    }, []);


    useEffect(() => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let activeSeatsCounterForRow = {};
        let activeRowCount = {}; // 열별 활성화된 좌석의 개수를 기록하는 대신, 알파벳을 할당받은 좌석의 개수를 기록

        const updatedSeats = seats.map((seat) => {
            if (seat.활성화 === '활성화상태') {
                // 활성화된 좌석의 행에 대한 카운터 증가
                if (!activeSeatsCounterForRow[seat.row]) {
                    activeSeatsCounterForRow[seat.row] = 0;
                }
                activeSeatsCounterForRow[seat.row] += 1;

                // 활성화된 좌석의 열에 대한 알파벳 순서 증가
                if (!activeRowCount[seat.col]) {
                    activeRowCount[seat.col] = 1; // 존재하지 않으면 1부터 시작
                } else {
                    activeRowCount[seat.col] += 1; // 이미 존재하면 이전 값에 1 추가
                }

                let xValue = activeSeatsCounterForRow[seat.row] - 1; // 0부터 시작하도록
                let yValue = alphabet[activeRowCount[seat.col] - 1]; // 알파벳 할당

                return { ...seat, X: xValue, Y: yValue, 좌석활성화: '활성화', 좌석타입: '일반' };
            }
            return seat;
        });

        setSeats(updatedSeats);
    }, []);

    useEffect(() => {
        console.log('seats 상태 확인:', seats);
    }, [seats]);

    const maxRow = Math.max(...seats.map(seat => seat.row));
    const maxCol = Math.max(...seats.map(seat => seat.col));

    // 좌석 상태에 따라 테이블 셀을 스타일링합니다.
    const getCellStyle = (isActive) => ({
        width: "30px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: isActive ? "lightgray" : "pink",
        textAlign: "center",
        fontSize: '10px',
    });

    // 테이블을 생성하는 함수입니다.
    const renderTable = () => {
        let table = [];

        for (let row = 1; row <= maxRow; row++) {
            let tableRow = [];
            for (let col = 1; col <= maxCol; col++) {
                const seat = seats.find(seat => seat.row === row && seat.col === col);
                let cellContent = "";
                let cellStyle = { ...getCellStyle(false), border: 'none', backgroundColor: 'transparent' };

                if (seat && seat.활성화 === "활성화상태") {
                    // 활성화 상태인 좌석이라면 cellContent와 cellStyle을 업데이트
                    cellContent = seat.X === 0 ? `${seat.Y}` : `${seat.X}`;
                    cellStyle = getCellStyle(true); // 이줄이 if 문 안으로 이동됨
                } else {
                    // 활성화 상태가 아닌 좌석에 대한 스타일
                    cellStyle = { ...getCellStyle(false), border: 'none', backgroundColor: 'transparent' };
                }

                tableRow.push(
                    <td key={`${row}-${col}`} style={cellStyle}>
                        {seat && seat.활성화 === "활성화상태" ? (
                            <button
                            type="button"
                            className="btn"
                            style={{ padding: '0', margin: '0', width: '100%', height: '100%' }}
                            onContextMenu={(e) => {
                                e.preventDefault(); // 기본 컨텍스트 메뉴를 막습니다.
                        
                        // 이전에 생성해둔 모달 인스턴스의 show 메소드를 호출
                        modalInstance.current.show();
                            }}
                        >
                            {cellContent}
                        </button>
                        ) : (
                            cellContent
                        )}
                    </td>
                );
            }
            // 각 행(tableRow)을 table 배열에 추가
            table.push(<tr key={`row-${row}`}>{tableRow}</tr>);
        }

        return <table><tbody>{table}</tbody></table>;
    };

    return (
        <>
            <h1>Seat Status</h1>
            {renderTable()} {/* 함수 호출 수정*/}

            {/* 모달 */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">z
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Asd99;
