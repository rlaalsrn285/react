import { useState } from 'react';

function Home() {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(3);
    const [checkedRows, setCheckedRows] = useState({});
    const [checkedCols, setCheckedCols] = useState({});
  
    const handleRowCheck = (rowIndex) => {
      setCheckedRows({ ...checkedRows, [rowIndex]: !checkedRows[rowIndex] });
    };
  
    const handleColCheck = (colIndex) => {
      setCheckedCols({ ...checkedCols, [colIndex]: !checkedCols[colIndex] });
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <th key={colIndex}>
                  <input
                    type="checkbox"
                    checked={!checkedCols[colIndex]}
                    onChange={() => handleColCheck(colIndex)}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                  <input
                    type="checkbox"
                    checked={!checkedRows[rowIndex]}
                    onChange={() => handleRowCheck(rowIndex)}
                  />
                </td>
                {Array.from({ length: cols }).map((_, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      backgroundColor:
                        !checkedRows[rowIndex] || !checkedCols[colIndex]
                          ? 'lightgrey'
                          : 'initial',
                    }}
                  >
                    {rowIndex}, {colIndex}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default Home;
