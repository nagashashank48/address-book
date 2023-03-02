import './App.css';
import {useState} from 'react'
import Dashboard from './Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Navigationbar';

import Contactform from './Contactform'
import React from 'react';
function App() {
  const[info,setInfo]=useState({});
  const[color,setColor]=useState('dashboard')
    
  function sendedit(data){
  let a={...data,"type":"edit"};
  setInfo(a)
}
function changecolor(color){
 setColor(color)
}
  return (
    <>
    <BrowserRouter>
    <Navbar colors={color}/>
    <Routes>
      <Route path="/" index element={<Dashboard onclick={sendedit}/>}/>
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/edit' element={<Contactform infos={info} />}/>
      <Route path="/add"  element={<Contactform change={changecolor}infos={{name:''}}/>}/>
      
      <Route path="*" element={<div className='error'>.....PAGE NOT FOUND</div>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
