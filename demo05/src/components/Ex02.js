import { useState } from "react";
import Jumbotron from "./Jumbotron";


function Ex02(){

    const [toy, SetToy] = useState([
        {toySerial:1, toyName:"뽀로로", topPrice:15000},
        {toySerial:2, toyName:"크롱", topPrice:12000},
        {toySerial:3, toyName:"루피피", topPrice:18000},
        {toySerial:4, toyName:"패티", topPrice:16000},
        {toySerial:5, toyName:"포비", topPrice:22000},
    ]);

    return(
        <>
            <Jumbotron aaa="222번" bbb="2222번 내용"></Jumbotron>

            {toy.map((ttt)=>(
                <div className="container mt-5">
                    <table className="table table-striped">
                        <thead className="text-center">
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>가격</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>{ttt.toySerial}</td>
                                <td>{ttt.toyName}</td>
                                <td>{ttt.topPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    )
}

export default Ex02;