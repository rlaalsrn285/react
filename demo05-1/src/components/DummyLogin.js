//실제 서버처리 없이 가짜로 로그인하는 화면

import { useRecoilState } from "recoil";
import { loginIdState, loginLevelState } from "./utils/RecoilData";
import { useCallback, useState } from "react";

const DummyLogin = ()=>{

    //state
    // const [loginId, setLoginId] = useState('');//현재 컴포넌트에서만
    // const [loginLevel, setLoginLevel] = useState('');//현재 컴포넌트에서만
    const [loginId, setLoginId] = useRecoilState(loginIdState);//전체 Recoil에서
    const [loginLevel, setLoginLevel] = useRecoilState(loginLevelState);//전체 Recoil에서

    //callback
    const login = useCallback((memberId, memberLevel)=>{
        setLoginId(memberId);
        setLoginLevel(memberLevel);
    }, [loginId, loginLevel]);

    return (
        <>
            <h1>테스트ㅁㄴㅇㄹ</h1>

            <div className="row mt-4">
                <div className="col">
                    <h2>loginId = {loginId}</h2>                    
                    <h2>loginLevel = {loginLevel}</h2>                    
                    <h2>jwt = ?</h2>                    
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <button className="btn btn-primary me-2"
                        onClick={e=>login('testuser1', '일반회원')}>
                        testuser1로 로그인 (일반회원)
                    </button>

                    <button className="btn btn-danger me-2"
                        onClick={e=>login('adminuser1', '관리자')}>
                        adminuser1로 로그인 (관리자)
                    </button>

                    <button className="btn btn-secondary"
                         onClick={e=>login('', '')}>
                        로그아웃
                    </button>
                </div>
            </div>
        </>
    );
};

export default DummyLogin;