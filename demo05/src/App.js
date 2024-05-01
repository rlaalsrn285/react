
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import Ex01 from './components/Ex01';
import Ex02 from './components/Ex02';
import Ex03 from './components/Ex03';
import Ex04 from './components/Ex04';
import Ex05 from './components/Ex05';
import { RecoilRoot } from 'recoil';

import Student from './components/integrated/Student';

import Asd22 from './components/Asd22';







function App() {
  return (
    <>
      <Menu></Menu>


      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm10 offset-sm1'>

            <RecoilRoot>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/asd22" element={<Asd22></Asd22>}></Route>
                <Route path="/ex01" element={<Ex01 />}></Route>
                <Route path="/ex02" element={<Ex02 />}></Route>
                <Route path='/ex03' element={<Ex03 />}></Route>
                <Route path='/ex04' element={<Ex04 />}></Route>
                <Route path='/ex051234' element={<Ex05 />}></Route>
                <Route path='/eeee' element={<Student></Student>}></Route>
              </Routes>
            </RecoilRoot>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
