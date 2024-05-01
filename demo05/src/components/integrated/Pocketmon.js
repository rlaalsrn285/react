import axios from "axios";
import { useCallback, useEffect, useRef, useState } from 'react';
import Jumbotron from './../Jumbotron';
import Pocketmon from './Pocketmon';
import { MdDeleteForever } from "react-icons/md";
import { Modal } from "bootstrap";
const PPocketmon = () => {

    useEffect(() => {
        loadPPP();
    }, []);

    const [pocketmons, setPocketmons] = useState([
    ]);

    const [input, setInput] = useState({
        pocketmonNo: "",
        pocketmonName: "",
        pocketmonType: "",
    });

    const geegeegee = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value
        });
    }, [input])

    const saveInput = useCallback(() => {
        axios({
            url: "http://localhost:8080/pocketmon/",
            method: "post",
            data: input,
        }).then(asdf => {
            loadPPP();
            cancelInput();
        });
    }, [input]);

    const cancelInput = useCallback(() => {
        setInput({
            pocketmonNo: "",
            pocketmonName: "",
            pocketmonType: "",
        });
        closeModal();
    }, [input]);

    const loadPPP = useCallback(() => {
        axios({
            url: "http://localhost:8080/pocketmon/",
            method: "get"
        }).then(qwer => {
            setPocketmons(qwer.data);
            console.log(qwer);
        });
    }, [pocketmons]);

    const deletePP = useCallback((ttt) => {
        axios({
            url: `http://localhost:8080/pocketmon/${ttt}`,
            method: "delete"
        }).then(qqq => {
            loadPPP();
        })
    })

    const bsModal = useRef();

    const openModal = useCallback(() => {
        const modal = new Modal(bsModal.current);
        modal.show();
    }, [bsModal])

    const closeModal = useCallback(() => {
        const modal = Modal.getInstance(bsModal.current);
        modal.hide();
    }, [bsModal])

    const edittt = useCallback((eee) =>{
        const copy = [...pocketmons];

        const copy2 = copy.map(qpqp =>{
            if(eee.pocketmonNo === qpqp.pocketmonNo){
                return{
                    ...qpqp,
                    edit:true,
                }
            }
            else{
                return qpqp;
            }
        });

        setPocketmons(copy2);
    },[pocketmons]);

    const canceledittt = useCallback((eee) =>{
        const copy = [...pocketmons];

        const copy2 = copy.map(qpqp =>{
            if(eee.pocketmonNo === qpqp.pocketmonNo){
                return{
                    ...qpqp,
                    edit:false,
                }
            }
            else{
                return qpqp;
            }
        });

        setPocketmons(copy2);
    },[pocketmons]);

    const chchch = useCallback((e,ttt)=>{
        const ccc = [...pocketmons];
        const ccc2 = ccc.map(ppp=>{
            if(ttt.pocketmonNo === ppp.pocketmonNo){
                return{
                    ...ppp,
                    [e.target.name] : e.target.value
                }
            }
            else{
                return {...ppp};
            }
        });
        setPocketmons(ccc2);
    },[pocketmons]);

    return (
        <>
            <Jumbotron aaa="포켓몬텅구리" bbb="구리구리"></Jumbotron>
            <div className="text-center">
                <button className="btn btn-warning"
                    onClick={e => openModal()}>신규등록</button>

            </div>

            <div className='row mt-4'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>속성</th>
                                <th>관리?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pocketmons.map(ppp => (
                                <tr key={ppp.pocketmonNo}>
                                    {ppp.edit === true ? (
                                        <>
                                        <td>{ppp.pocketmonNo}</td>
                                        <td>
                                            <input type="text" className="form-control"
                                             value={ppp.pocketmonName} name="pocketmonName"
                                              onChange={e=>chchch(e, ppp)}></input>
                                        </td>
                                        <td>
                                        <input type="text" className=""
                                        value={ppp.pocketmonType} name="pocketmonType"
                                        onChange={e=>chchch(e, ppp)}></input>
                                        </td>
                                        <td>수정칸</td>
                                        <td><button
                                         onClick={e=>canceledittt(ppp)}>취소</button></td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{ppp.pocketmonNo}</td>
                                            <td>{ppp.pocketmonName}</td>
                                            <td>{ppp.pocketmonType}</td>
                                            <td><button className="btn btn-success"
                                                onClick={e => deletePP(ppp.pocketmonNo)}>
                                                <MdDeleteForever />삭제</button>
                                                <button
                                                 onClick={e => edittt(ppp)}>수정</button></td>
                                        </>
                                    )}

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row -mt-4">
                <div className="col">
                    <label>번호</label>
                    <input type="text" name="pocketmonNo" value={input.pocketmonNo}
                        onChange={e => geegeegee(e)} className="form-control" />
                </div>
            </div>

            <div className="row -mt-4">
                <div className="col">
                    <label>이름</label>
                    <input type="text" name="pocketmonName" value={input.pocketmonName}
                        onChange={e => geegeegee(e)} className="form-control" />
                </div>
            </div>

            <div className="row -mt-4">
                <div className="col">
                    <label>속성</label>
                    <input type="text" name="pocketmonType" value={input.pocketmonType}
                        onChange={e => geegeegee(e)} className="form-control" />
                </div>
            </div>

            <div className="row -mt-4">
                <div className="col text-center">
                    <button className="btn btn-info"
                        onClick={e => saveInput()}>등록</button>
                    <button className="btn"
                        onClick={e => cancelInput()}>취소</button>
                </div>
            </div>

            <div ref={bsModal} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">방가구리</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row -mt-4">
                                <div className="col">
                                    <label>번호</label>
                                    <input type="text" name="pocketmonNo" value={input.pocketmonNo}
                                        onChange={e => geegeegee(e)} className="form-control" />
                                </div>
                            </div>

                            <div className="row -mt-4">
                                <div className="col">
                                    <label>이름</label>
                                    <input type="text" name="pocketmonName" value={input.pocketmonName}
                                        onChange={e => geegeegee(e)} className="form-control" />
                                </div>
                            </div>

                            <div className="row -mt-4">
                                <div className="col">
                                    <label>속성</label>
                                    <input type="text" name="pocketmonType" value={input.pocketmonType}
                                        onChange={e => geegeegee(e)} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={e => saveInput()}>등록</button>
                            <button type="button" className="btn btn-primary"
                                onClick={e => cancelInput()}>취소</button>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default PPocketmon;