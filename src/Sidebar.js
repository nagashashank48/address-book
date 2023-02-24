import React,{useState,useEffect}from "react";
import axios from "axios";
import './Sidebar.scss'
function Sidebar(){
    const[data,setData]=useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:3003/details`).then(res => {
            const a=res.data;
            setData(a);
          })
    },[])
   return( 
    <div>
    {
        data.map((item)=>{
           return(
          <div className='sidebar '  >
               <div>
           <div style={{fontSize:'30px'}}key={item.name}>{item.name}</div>
           <div key={item.email} >{item.email}</div>
           <div key={item.number}>{item.number}</div>
           </div>
           </div>
        
         ) })
       }
       </div>
       )
}
export default Sidebar