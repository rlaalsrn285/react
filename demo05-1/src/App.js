import Menu from './components/Menu';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import DummyLogin from './components/DummyLogin';
import RealLogin from './components/Login';
import Digimon from './components/digimon';




function App() {
  return (
    <>

    <Menu></Menu>

      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm10 offset-sm1'>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ddd" element={<DummyLogin></DummyLogin>}></Route>
            <Route path="/lll" element={<RealLogin></RealLogin>}></Route>
            <Route path='/digimon' element={<Digimon></Digimon>}></Route>
              

            </Routes>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
