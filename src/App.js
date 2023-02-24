import './App.css';
import {useState} from 'react'
import Dashboard from './Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Navigationbar';
import Add from './Addform'
import Edit from './Editform'
function App() {
  const[info,setInfo]=useState({});
    
  function sendedit(data){
   setInfo(data)
}

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" index element={<Dashboard onclick={sendedit}/>}/>
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/edit' element={<Edit infos={info} />}/>
      <Route path="/add"  element={<Add/>}/>
      <Route path="*" element={<div className='error'>.....PAGE NOT FOUND</div>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
