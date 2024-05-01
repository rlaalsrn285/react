import { useRecoilState } from "recoil";
import { seatsState } from './utils/RecoilData';

function Sss2() {
    const [seats, setSeats] = useRecoilState(seatsState);
  
    return (
      <>
        <h1>222</h1>
        <h1>222</h1>
      </>
    );
  }
  
  export default Sss2;