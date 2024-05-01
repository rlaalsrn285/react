import { useState } from "react";
import Jumbotron from "./Jumbotron";


function Ex03() {

    const [liquors, SetLiquor] = useState([
        { itemNo: 1, itemName: "참이슬", itemPrice: 1200, edit: false },
        { itemNo: 2, itemName: "처음처럼", itemPrice: 1500, edit: false },
        { itemNo: 3, itemName: "새로", itemPrice: 1700, edit: false },
        { itemNo: 4, itemName: "좋은데이", itemPrice: 1000, edit: false },
        { itemNo: 5, itemName: "청하", itemPrice: 2200, edit: false }
    ]);

    const clearLiquors = (e) => {
        SetLiquor([]);
    };

    const dddd = (asd) => {

        const searchItems = liquors.filter((qwer) => qwer.itemNo !== asd.itemNo);
        SetLiquor(searchItems);
    }

    const [editMode, setEditMode] = useState(false);

    return (
        <>
            <Jumbotron aaa="333번" bbb="3333번 내용"></Jumbotron>

            <div className="row mt-5">
                <div className="col">
                    <button className="btn btn-danger"
                        onClick={clearLiquors}>삭제버트</button>
                </div>
            </div>
            <div className="container mt-5">
                <div className='row justify-content-center'>
                    <div className='col-sm10 offset-sm1'>
                        <table className="table">
                            <thead className="text-center">
                                <tr>
                                    <th className="text-center">번호</th>
                                    <th className="text-center">이름</th>
                                    <th className="text-center">가격</th>
                                    <th>가나다라</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {liquors.map((qwer) => (
                                    <tr key={qwer.itemNo}>
                                        {editMode ? (
                                            <>
                                                <td><button>수정</button></td>
                                                <td><button>수정</button></td>
                                                <td><button>수정</button></td>
                                                <td><button>수정</button></td>
                                            </>
                                        ) 
                                        
                                        : (
                                        <>
                                            <td className="text-center">{qwer.itemNo}</td>
                                            <td className="text-center">{qwer.itemName}</td>
                                            <td className="text-center">{qwer.itemPrice}</td>
                                            <td><button className="btn btn-danger"
                                                onClick={e => dddd(qwer)}>삭제</button></td>
                                        </>
                                                )}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ex03;