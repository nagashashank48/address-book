import React, { useEffect,useState } from "react";
import Sidebar from './Sidebar'
import {Row,Col,Form,Button} from'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";
import './Editform.scss'
function Editform(props){
const[data,setData]=useState({});

    useEffect(()=>{
    let a=props.infos
    setData(a)
    },[])
   
    const onValueChange = (e) => {
    
    
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }))
    
      }
    const editdetails=()=>
    {
        console.log(data.id)
        axios.put(`http://localhost:3003/details/${data.id}`,data)
        .then(function (response) {
            console.log(response);

        })
    }
   
   return (
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
                <Form.Control type="text" name='name' value={data.name}   onChange={(e) => onValueChange(e)} ></Form.Control>
    
                <Form.Label style={{paddingTop:'8px'}}>Email</Form.Label>
                <Form.Control type="text" name='email' value={data.email}   onChange={(e) => onValueChange(e)}></Form.Control>
    
                <Row>
                    <Col sm='5'><Form.Label>Mobile</Form.Label>
                    <Form.Control type="text"  name='number'value={data.number}   onChange={(e) => onValueChange(e)}></Form.Control>
                    </Col>
                    <Col sm='1'></Col>
                    <Col sm='6'> <Form.Label>Landline</Form.Label>
                    <Form.Control type="text"  name='landline' value={data.landline} onChange={(e) => onValueChange(e)}></Form.Control></Col>
                    </Row>
    
                <Form.Label style={{paddingTop:'8px'}}>Website</Form.Label>
                <Form.Control type="text" name='website' value={data.website} onChange={(e) => onValueChange(e)}></Form.Control>

                <Form.Label style={{paddingTop:'8px'}}>Address</Form.Label>
                <Form.Control as="textarea" rows={3} name='address' value={data.address} onChange={(e) => onValueChange(e)}></Form.Control>
                <Link to='/'>  <Button variant='success'  className="editbutton" onClick={()=>editdetails()} > SAVE</Button></Link>
                <Link to='/'>  <Button variant='success'  className="editbutton" > CANCEL</Button></Link>
                </div>
               
                  </Form>
                
            </Col>
            
            </Row>
            </div>
            </div>
    );
}
export default Editform