import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row,Col} from 'react-bootstrap'
import editbutton from './images/Edit-icon.png'
import deletebutton from './images/delete2.png'
import { Link } from 'react-router-dom'
import './dashboard.scss'
function Dashboard(props){
    const [data,setData]=useState([]);
    const [activeContact,setActiveContact]=useState();
    const[select,setSelect]=useState({ });
   

    
    useEffect(()=>{
        axios.get(`http://localhost:3003/details`).then(res => {
            const a=res.data;
            setData(a);
            setSelect(a[0])
            console.log(a[0].address)
          })
    },[])
    const showdata=(item)=>{
       
      setSelect(item);
     props.onclick(select);
     
    }
    
    const deletedata=()=>{
        axios.delete(`http://localhost:3003/details/${select.id}`).then(res=>{
            window.location.reload();
        })
    }
   const changecolor=(item)=>{
    setActiveContact(item.id);
    console.log(activeContact)
   }
  
    
    return(
        <div>
         <div className='contact'><b>CONTACTS</b></div>
         <div>
           <Row>
               
                <Col sm='4' style={{marginLeft:'30px'}}>
                {
                 data.map((item)=>{
                    return(
                    <div  style={{backgroundColor:item.id===activeContact?'#cee7f2':'white'}} onClick={()=>changecolor(item)}>
                   <div  className='sideform'   onClick={()=>showdata(item)}>
                   
                    <div  style={{fontSize:'30px'}}key={item.name}>{item.name}</div>
                    <div key={item.email} >{item.email}</div>
                    <div key={item.number}>{item.number}</div>
                    </div>
             </div>
                 
                  ) })
                }
        </Col>
        <Col sm='4' style={{paddingLeft:'80px',fontFamily:'Calibri Light'}}>
           <div  className='headname'><b>{select.name}</b></div>
           <div className='details'>
           <div>Email:{select.email}</div><br></br>
           <div>Mobile:{select.number}</div>
           <div>Landline:{select.landline}</div><br></br>
           <div >Website:{select.website}</div><br></br>
           <div  className='address' dangerouslySetInnerHTML={{_html:select.address}}></div>
           </div>
        </Col>
        <Col sm='3' style={{paddingRight:'0px'}}>
        <Link to='/edit'><button  className='buttons' onClick={()=>showdata()}><img src={editbutton} alt=''  height='15px' witdh='15px'></img>EDIT</button></Link>
        <Link to='/home'><button  className='buttons' onClick={()=>deletedata(select)}> <img src={deletebutton} alt='' height='20px' witdh='20px'></img>DELETE</button></Link>
        </Col>
        </Row>

        </div>


     

        </div>
        

    )
}
export default Dashboard 