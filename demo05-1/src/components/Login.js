import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { loginIdState, loginLevelState } from "./utils/RecoilData";
import axios from "./utils/CustomAxios";
import { useNavigate } from "react-router";

const RealLogin = ()=>{

    const navigate = useNavigate();

    //state
    const [member, setMember] = useState({
        memberId : "" , memberPw : ""
    });

    //recoil
    const [loginId, setLoginId] = useRecoilState(loginIdState);
    const [loginLevel, setLoginLevel] = useRecoilState(loginLevelState);

    //callback
    const changeMember = useCallback(e=>{
        setMember({
            ...member,
            [e.target.name] : e.target.value
        });
    }, [member]);

    const login = useCallback(async() => {
        if(member.memberId.length === 0) return;
        if(member.memberPw.length === 0) return;

        const response = await axios.post("/member/login", member)
        setLoginId(response.data.memberId);
        setLoginLevel(response.data.memberLevel);
        axios.defaults.headers.common['Authorization'] = response.data.token;
        navigate("/");
    },[member]);

    return (
        <>
            <h1> 진짜 로그인창이삼</h1>

            <div className="row mt-4">
                <div className="col">
                    <label>아이디</label>
                    <input type="text" name="memberId" className="form-control"
                            value={member.memberId} onChange={e=>changeMember(e)}/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label>비밀번호</label>
                    <input type="password" name="memberPw" className="form-control"
                            value={member.memberPw} onChange={e=>changeMember(e)}/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <button className="btn btn-success w-100"
                    onClick={login}>로그인</button>
                </div>
            </div>
        </>
    );
};

export default RealLogin;