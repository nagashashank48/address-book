import React, {  useEffect, useState ,useCallback} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contactform.scss";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function Contactform(props) {
  const [name, setName] = useState(props.infos.name);
  const [email, setEmail] = useState(props.infos.email);
  const [number, setNumber] = useState(props.infos.number);
  const [landline, setLandline] = useState(props.infos.landline);
  const [website, setWebsite] = useState(props.infos.website);
  const [address, setAddress] = useState(props.infos.address);
  const [error,setErrors]=useState([]);
  const [submit,setSubmit]=useState(false)
  const navigate=useNavigate();
  
  const Validate = () => {
    let isValid =true;
    let error = {};
 
    if (!name) {
        isValid=false;
      error.name = "Please Enter Your Name.";
    }
    if (!email) {
        isValid=false;
      error.email = "Please Enter Your Email.";
    }
    if (typeof email !== "undefined") {

        var pattern = new RegExp( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/);
        if (!pattern.test(email)) {
          isValid = false;
          error.email = "Please Enter Valid Email Address.";
        }
      }
    if (!number) {
        isValid=false;
      error.number = "Please Enter Your Number.";
    }else if (!/^\d{10}$/.test(number)) {
        isValid = false;
        error.number = "Please Enter Valid Number.";
      }
      // else if(number.length<10){
      //   isValid=false;
      //   error.number="please Enter Ten Digit Number"
      // }

    if (!landline) {
        isValid=false;
      error.landline = "Please Enter Your Landline.";
    }else if (!/^\d{10}$/.test(landline)) {
      isValid = false;
      error.landline = "Please Enter Valid Landline Number.";
    }
    // else if(landline.length<10){
    //   isValid=false;
    //   error.landline="please Enter Ten Digit Number"
    // }
    if (!website) {
        isValid=false;
      error.website = "Please Enter Your Website.";
    }
    if (typeof website !== "undefined") {

      var pattern2 = new RegExp( /^[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z]+)+$/);
      if (!pattern2.test(website)) {
        isValid = false;
        error.website = "Please Enter Valid Website.";
      }
    }
    if (!address) {
        isValid=false;
      error.address = "Please Enter Your Address.";
    }
  
    setErrors(error);



  
return isValid;
}
   useEffect(() => {
    if(submit===true){
    Validate();
  }
  }, [name, email, number, landline, website, address]);
 
  const submitForm = () => {
    setSubmit(true)
    if(Validate()){
    const data = {
      name: name,
      email: email,
      number: number,
      landline: landline,
      website: website,
      address: address,
    };
    if (props.infos.type === "edit") {
      axios.put(`http://localhost:3003/details/${props.infos.id}`, data).then((res) => {
        console.log(res.data);
        navigate("/")
      });
    } else {
      axios.post("http://localhost:3003/details", data).then((res) => {
        console.log(res.data);
        navigate("/")

        
      });
    }
    
  }
  };
  
  
  
  
  return (
    <div className="scroll">
      <div className="contact">
        CONTACTS
      </div>
      <div>
        <Row className="totalrow">
          <Col style={{ fontFamily: "Calibri Light" }} sm="4">
            <Sidebar />
          </Col>
          <Col sm="7">
            <Form >
              <div className="totalform">
                <Form.Label className="headings">Name<span className="hash">*</span></Form.Label>
                <Form.Control type="text" value={name}  onChange={(e) =>{setName(e.target.value); if(submit===true){Validate()}}} />
                {error.name&&<div className="validation">{error.name}</div>}


                <Form.Label style={{ paddingTop: "8px" }}>Email<span className="hash">*</span></Form.Label>
                <Form.Control type="text" value={email}  onChange={(e) => {setEmail(e.target.value); if(submit===true){Validate()} }} />
                {error.email&&<div  className="validation">{error.email}</div>}


                <Row>
                  <Col sm="5">
                    <Form.Label>Mobile<span className="hash">*</span></Form.Label>
                    <Form.Control type="text" value={number} onChange={(e) => {setNumber(e.target.value); if(submit===true){Validate()}}} />
                    {error.number&&<div  className="validation">{error.number}</div>}

                  </Col>
                  <Col sm="1"></Col>
                  <Col sm="6">
                    <Form.Label>Landline<span className="hash">*</span></Form.Label>
                    <Form.Control type="text" value={landline} onChange={(e) => {setLandline(e.target.value); if(submit===true){Validate()}}}/>
                    {error.landline&&<div  className="validation">{error.landline}</div>}

                  </Col>
                </Row>

                <Form.Label style={{ paddingTop: "8px" }}>Website<span className="hash">*</span></Form.Label>
                <Form.Control type="text" value={website} onChange={(e) => {setWebsite(e.target.value);if(submit===true){Validate()}}} />
                {error.website&&<div  className="validation">{error.website}</div>}


                <Form.Label style={{ paddingTop: "8px" }}>Address<span className="hash">*</span></Form.Label>
                <Form.Control as="textarea" rows={3} value={address} onChange={(e) => {setAddress(e.target.value); if(submit===true){Validate()}}} />
                {error.address&&<div  className="validation">{error.address}</div>}


                
                  <Button variant="success" className="button" onClick={submitForm}>
                    {props.infos.type === "edit" ? "EDIT":'ADD'}
                  </Button>
                  <Link to='/'>  <Button variant='success' className="cancel" onClick={()=>{props.change('dashboard')}}> CANCEL</Button></Link>
 </div></Form>
 </Col><Col></Col></Row></div></div>
 )}
 export default Contactform;