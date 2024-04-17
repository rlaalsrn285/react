import { useCallback, useState } from "react";


function Ex05() {

    const [users, setUser] = useState([
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Smith", age: 30 },
        { id: 3, name: "Emily Brown", age: 22 },
        { id: 4, name: "Michael Johnson", age: 28 },
    ])

    const [input, setInput] = useState({
        id: "", name: "", age: ""
    });

    const changeppp = useCallback((e) => {
        const nnn = e.target.name;
        const vvv = e.target.value;

        setInput({
            ...input,
            [nnn]: vvv
        });
    }, [input])

    const saveInput = useCallback(() => {
        const copyInput = { ...input };
        const copyusers = [...users, copyInput];
        setUser(copyusers);

        setInput({ id: "", name: "", age: "" });
    }, [input, users]);

    const clearuses = useCallback(() => {
        setUser([]);
    }, [users]);

    const deleteUser = useCallback((target) => {
        const searchResult = users.filter((asd) => asd.id !== target.id);
        setUser(searchResult);
    }, [users]);



    return (
        <>

            <div className="row mt-4">
                <div className="col text-center">
                    <button className="btn btn-success"
                        onClick={clearuses}>전체삭제</button>
                </div>
            </div>

            <div className="row mt-4 text-center">
                <div className="col-3">번호</div>
                <div className="col-3">이름</div>
                <div className="col-3">나이</div>
                <div className="col-3"></div>
            </div>
            <hr />
            {users.map((asd) => (
                <div className="row mt-4 text-center">
                    <div className="col-3">{asd.id}</div>
                    <div className="col-3">{asd.name}</div>
                    <div className="col-3">{asd.age}</div>
                    <div className="col-3">
                        <button className="btn btn-success"
                            onClick={e => deleteUser(asd)}>삭제</button>
                    </div>
                </div>
            ))}
            <hr />

            <div className="row mt-5">
                <div className="col">
                    <label>번호</label>
                    <input type="text" name="id" className="form-control" value={input.id}
                        onChange={e => changeppp(e)} />
                </div>

                <div className="col">
                    <label>이름</label>
                    <input type="text" name="name" className="form-control" value={input.name}
                        onChange={e => changeppp(e)} />
                </div>

                <div className="col">
                    <label>나이</label>
                    <input type="text" name="age" className="form-control" value={input.age}
                        onChange={e => changeppp(e)} />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col text-end">
                    <button className="btn btn-success"
                        onClick={e => saveInput()}>저장</button>
                    <button className="btn btn-danger ms-2"
                    >취소</button>
                </div>
            </div>


        </>
    )
}

export default Ex05;