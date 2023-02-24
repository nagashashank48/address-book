import React, { useState } from "react";
import {Link} from "react-router-dom";
// import "./Navigationbar.css";
import './Navigationbar.scss';
import edit1 from './images/blog-icon.png'

function Navigationbar(){
    const [activebutton,setActivebutton]=useState('dashboard')
    
return(
    <div >
    <div className="addressbook">Address Book</div>

    <div className="secoundbar" >
   
     
 <Link to='/'   style={{ backgroundColor: activebutton === 'dashboard' ? 'gray' : 'black' }}  onClick={()=>{setActivebutton('dashboard')}}className='navbutton' > HOME</Link>
 <Link to='/add'  style={{ backgroundColor: activebutton === 'add' ? 'gray' : 'black' }}  onClick={()=>{setActivebutton('add')}} className='navbutton' >+ ADD</Link>

 <img src={edit1} className='image' alt='' ></img>
 

     </div>

     </div>
)
}
export default Navigationbar