import React,{useState} from 'react'
import { Row,Col,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Addform.scss'
import Sidebar from './Sidebar'

function Addform(){
    const[name,setName]=useState({});
    const[email,setEmail]=useState({});
    const[number,setNumber]=useState({});
    const[landline,setLandline]=useState({});
    const[website,setWebsite]=useState({});
    const[address,setAddress]=useState({});

    const Addetails=()=>
    {
       
       
   const a={
    name:name,
    email:email,
    number:number,
    landline:landline,
    website:website,
    address:address
   }
console.log(a)
   axios.post('http://localhost:3003/details',a).then(res=>{
    console.log(a)
   })
}
   
   
    
return(
    <div >
         <div className='contact' ><b>CONTACTS</b></div>
         <div>
<Row>
               
                <Col style={{fontFamily:'Calibri Light'}} sm='4'>

                <Sidebar/>
        </Col>
        <Col sm='7'>
        <Form   style={{boxShadow:'0px 0px 25px '}}>
            <div className='addform'>
        <Form.Label  className='headings'>Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>setName(e.target.value)}></Form.Control>

            <Form.Label style={{paddingTop:'8px'}}>Email</Form.Label>
            <Form.Control type="text"  onChange={(e)=>setEmail(e.target.value)}></Form.Control>

            <Row>
                <Col sm='5'><Form.Label>Mobile</Form.Label>
                <Form.Control type="text"  onChange={(e)=>setNumber(e.target.value)}></Form.Control>
                </Col>
                <Col sm='1'></Col>
                <Col sm='6'> <Form.Label>Landline</Form.Label>
                <Form.Control type="text"  onChange={(e)=>setLandline(e.target.value)}></Form.Control></Col>
                </Row>

            <Form.Label style={{paddingTop:'8px'}}>Website</Form.Label>
            <Form.Control type="text"  onChange={(e)=>setWebsite(e.target.value)}></Form.Control>
            <Form.Label style={{paddingTop:'8px'}}>Address</Form.Label>
            <Form.Control  as="textarea" rows={3}  onChange={(e)=>setAddress(e.target.value)}></Form.Control> 
         
           <Link to='/'>  <Button variant='success'  className="addbutton"  onClick={()=>Addetails()}> ADD</Button></Link>
           <Link to='/'>  <Button variant='success'  className="addbutton" > CANCEL</Button></Link>


            </div>
           
              </Form>
            
        </Col>
       
        </Row>
        </div>
        </div>)
}
export default Addform