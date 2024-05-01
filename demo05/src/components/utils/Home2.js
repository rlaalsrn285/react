import { useState } from 'react';

function Home() {
  const rows = Array.from({ length: 7 }, (_, index) => index + 1);
  const cols = Array.from({ length: 7 }, (_, index) => index + 1);

  const [checkedCells, setCheckedCells] = useState(() =>
    rows.reduce((acc, row) => {
      acc[row] = cols.reduce((accCol, col) => {
        accCol[col] = false;
        return accCol;
      }, {});
      return acc;
    }, {})
  );

  const handleCellClick = (row, col) => {
    setCheckedCells((prev) => ({
      ...prev,
      [row]: {
        ...prev[row],
        [col]: !prev[row][col],
      },
    }));
  };

  const handleRowCheck = (rowIndex) => {
    const isRowChecked = Object.values(checkedCells[rowIndex]).every((v) => v);
    const newRowState = !isRowChecked;

    setCheckedCells((prev) => ({
      ...prev,
      [rowIndex]: Object.keys(prev[rowIndex]).reduce((acc, col) => {
        acc[col] = newRowState;
        return acc;
      }, {}),
    }));
  };

  const handleColCheck = (colIndex) => {
    const newCheckedCells = { ...checkedCells };

    Object.keys(newCheckedCells).forEach((row) => {
      newCheckedCells[row][colIndex] = !Object.values(newCheckedCells).every((v) => v[colIndex]);
    });

    setCheckedCells(newCheckedCells);
  };

  return (
    <>
      <h1>홈홈홈홈</h1>
      <table>
        <tbody>
          {rows.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {cols.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '15px',
                    backgroundColor: checkedCells[rowIndex + 1][colIndex + 1] ? 'lightgreen' : 'transparent',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleCellClick(rowIndex + 1, colIndex + 1)}
                >
                  [X:{rowIndex + 1}, Y:{colIndex + 1}]
                </td>
              ))}
              {/* 행 전체 선택 체크박스 추가 */}
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleRowCheck(rowIndex + 1)}
                  checked={Object.values(checkedCells[rowIndex + 1]).every((v) => v)}
                />
              </td>
            </tr>
          ))}
          <tr>
            {cols.map((_, colIndex) => (
              <td key={colIndex}>
                {/* 열 전체 선택 체크박스 추가 */}
                <input
                  type="checkbox"
                  onChange={() => handleColCheck(colIndex + 1)}
                  checked={Object.values(checkedCells).every((row) => row[colIndex + 1])}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Home;
