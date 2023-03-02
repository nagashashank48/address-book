import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
// import "./Navigationbar.css";
import './Navigationbar.scss';
import blog from './images/blog-icon.png'

function Navigationbar(props){
    const [activebutton,setActivebutton]=useState(props.colors)
    console.log(props.colors)
    
return(
    <div >
    <div className="addressbook">Address Book</div>

    <div className="secoundbar" >
   <Link to='/'    > <button style={{ backgroundColor: activebutton=== 'dashboard' ? '#FF9000' : 'black',borderLeft: activebutton === 'dashboard' ? '3px solid white' : 'black' }}  onClick={()=>{setActivebutton('dashboard')}}className='navbutton'>HOME</button></Link>
 <Link to='/add'  ><button style={{ backgroundColor: activebutton === 'add' ? '#FF9000' : 'black',borderLeft: activebutton === 'add' ? '3px solid white' : 'black' }}  onClick={()=>{setActivebutton('add')}} className='navbutton' >+ ADD </button></Link>
  <img src={blog} className='image' alt='' ></img>
 </div>
 


     </div>
)
}
export default Navigationbar