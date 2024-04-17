import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  //state - 입력창의 name과 이름이 같아야 편하게 객체 state를 이용할 수 있다
  const [member, setMember] = useState({
    memberId : "" , memberPw : "" , memberPwRe : ""
  });

  //memo

  //function
  //function changeMember(e) {}
  const changeMember = e=> {
    //e는 이벤트 정보이며, e.target은 이벤트 발생 대상 태그이다
    //태그의 name과 value를 추출해서 member를 변경 (setMember 호출)
    setMember({
      ...member,//member의 나머지 항목은 유지를 시키고
      [e.target.name] : e.target.value //입력된 창의 이름에 대한 값만 변경
    });
  };

  return (
    <div className="container-fluid">

      {/* 기본 폭 설정 */}
      <div className='row'>
        <div className='col-md-8 offset-md-2'>

          {/* 점보트론 */}
          <div className='row mt-5'>
            <div className='col'>
              <div className='p-4 bg-dark text-light rounded text-center'>
                <h1>회원가입</h1>
              </div>
            </div>
          </div>

          {/* 각종 입력창(아이디, 비밀번호, 비밀번호 확인) */}
          <div className='row mt-4'>
            <div className='col'>
              <label>아이디</label>
              <input type="text" name="memberId" className='form-control'
                    value={member.memberId} onChange={changeMember}/>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col'>
              <label>비밀번호</label>
              <input type="password" name="memberPw" className='form-control'
                    value={member.memberPw} onChange={changeMember}/>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col'>
              <label>비밀번호 확인</label>
              <input type="password" name="memberPwRe" className='form-control'
                    value={member.memberPwRe} onChange={changeMember}/>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col'>
              <button type="button" className='btn btn-success w-100'>
                회원가입
              </button>  
            </div>            
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
