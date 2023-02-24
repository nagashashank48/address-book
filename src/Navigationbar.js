import React from "react";
import {Link} from "react-router-dom";
// import "./Navigationbar.css";
import './Navigationbar.scss';
import edit1 from './images/blog-icon.png'

function Navigationbar(){
return(
    <div >
    <div className="addressbook">Address Book</div>

    <div className="secoundbar" >
   
     
 <Link to='/'  className='navbutton' > HOME</Link>
 <Link to='/add'  className='navbutton' >+ ADD</Link>

 <img src={edit1} className='image' alt='' ></img>
 

     </div>

     </div>
)
}
export default Navigationbar