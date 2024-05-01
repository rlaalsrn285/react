import{NavLink} from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginIdState, loginLevelState } from "./utils/RecoilData";
import { useMemo,useCallback } from "react";
import axios from "./utils/CustomAxios";

function Menu() {


    //state
    const [loginId, setLoginId] = useRecoilState(loginIdState);
    const [loginLevel, setLoginLevel] = useRecoilState(loginLevelState);

    //memo
    const isLogin = useMemo(()=>{
        return loginId.length > 0 && loginLevel.length > 0;
    }, [loginId, loginLevel]);

    //callback
    const logout = useCallback(()=>{
        //recoil 저장소에 대한 정리 + axios의 헤더 제거
        setLoginId('');
        setLoginLevel('');
        delete axios.defaults.headers.common['Authorization'];
    }, [loginId, loginLevel]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" />
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu">
                                    <NavLink className='dropdown-item' to='/ddd'>더미로그인</NavLink>
                                    <NavLink className='dropdown-item' to='/lll'>진짜로그인</NavLink>
                                    { isLogin ? (
                                        <NavLink className="dropdown-item" to="#" 
                                                    onClick={e=>logout()}>진짜로그아웃</NavLink>
                                    ) : (
                                        <NavLink className="dropdown-item" to="/lll">진짜로그인</NavLink>
                                    ) }

                                </div>
                            </li>
                        </ul>
                        
                         {/* 이 부분을 로그인 여부에 따라 다르게 표시 */}
                         <div className="d-flex text-dark">
                            { isLogin ? (
                                <>
                                    현재 로그인 중
                                </>
                            ) : (
                                <>
                                    현재 로그아웃 중
                                </>
                            ) } 
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;