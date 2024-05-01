import {atom} from "recoil";

const seatsState = atom({
    key: 'seatsState', // 고유한 key
    default: [], // 초기 상태 값
  });

export {seatsState};