import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { Row,Col} from 'react-bootstrap'
import editbutton from './images/Edit-icon.png'
import deletebutton from './images/delete2.png'
import { Link, useNavigate } from 'react-router-dom'
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
          })
    },[])

    const showdata=(item)=>{

     setSelect(item);
      
    //  props.onclick(select);
     
    }
    useEffect(() => {
        props.onclick(select);
      }, [select]);
      
    
    const deletedata=()=>{
        axios.delete(`http://localhost:3003/details/${select.id}`).then(res=>{

        axios.get(`http://localhost:3003/details`).then(res => {
            const a=res.data;
            setData(a);
            setSelect(a[0])
          })
})
    }


   const changecolor=(item)=>{
    setActiveContact(item.id);
    console.log(activeContact)
   }
  
    
    return(
        <div>
         <div className='contact'><b>CONTACTS</b></div>
         <div >
           <Row className='rowright'> 
               
                <Col sm='4' >
                    {/* <Sideform/> */}
                {
                 data.map((item)=>{
                    return(
                    <div className='total'  style={{backgroundColor:item.id===activeContact?'#cee7f2':'white'}} onClick={()=>changecolor(item)}>
                   <div  className='sideform'  onClick={()=>showdata(item)}>
                   
                    <div  style={{fontSize:'30px'}}key={item.name}>{item.name}</div>
                    <div key={item.email} >{item.email}</div>
                    <div key={item.number}>{item.number}</div>
                    </div>
             </div>
                 
                  ) })
                }
        </Col>
        <Col sm='4' style={{paddingLeft:'80px',fontFamily:'Calibri Light'}}>
           <div  className='headname'>{select.name}</div>
           <div className='details'>
           <div className='margins'>Email:{select.email}</div>
           <div>Mobile:{select.number}</div>
           <div className='margins'>Landline:{select.landline}</div>
           <div className='margins' >Website:{select.website}</div>
           <div >Address:<span className='address1'>{select.address}</span></div>
           </div>
        </Col>
        <Col sm='3' style={{paddingRight:'0px'}}>
        <Link to='/edit'><button  className='buttons'><img src={editbutton} alt=''  height='15px' witdh='15px'></img>EDIT</button></Link>
        <Link to='/'><button  className='buttons' onClick={()=>deletedata(select)}> <img src={deletebutton} alt='' height='20px' witdh='20px'></img>DELETE</button></Link>
        </Col>
        </Row>

        </div>


     

        </div>
        

    )
}
export default Dashboard 