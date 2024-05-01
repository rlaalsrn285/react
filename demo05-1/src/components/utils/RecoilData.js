import {atom} from "recoil";



const loginIdState = atom({
    key : 'loginIdState',
    default : ''
});
const loginLevelState = atom({
    key : 'loginLevelState',
    default : ''
});

//default export는 하나밖에 할 수 없다
//export default countState;

//naming export는 여러 개 할 수 있다.
export { loginIdState, loginLevelState};