import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {  Link } from "react-router-dom";
import swal from 'sweetalert';
import { useState } from 'react';
import axios from 'axios';
function AddUser(){
    const [fname,setFname]=useState("")
    const [fnameError,setFnameError]=useState(false)
    const [lname,setLname]=useState("")
    const [lnameError,setLnameError]=useState(false)
    const [Password,setPassword]=useState("")
    const [PasswordError,setPasswordError]=useState(false)
    const validateForm=()=>{
        let ufname=fname
       let ulname =lname
        let upassword=Password
        console.log("-------",ufname);
        console.log("-------",upassword);
        console.log("-------",ulname);
if(ufname){
    setFnameError(false)
}else{
    setFnameError(true)
}
if(ulname){
  setLnameError(false)
}else{
  setLnameError(true)
}
if(upassword){
    setPasswordError(false)
}else{
    setPasswordError(true)
}
        let formData={
            firstName:ufname,
            lastName:"maanik",
            age:22
        }
        axios.post('https://dummyjson.com/users/add',formData )
          .then(function (response) {
            swal("success!", "User added succeessfully", "success");
            // swal("Oops!", "Something went wrong!", "error");
          })
          .catch(function (error) {
            swal("Oops!", "Something went wrong!", "error");
          });


    }
    const random=(event)=>{
        const id=event.target.id
        const value=event.target.value
        if(id=="fn"){
            setFname(value)

        }
        if(id=="ln"){
          setLname(value)
  
          }
        if(id=="em"){
        setPassword(value)

        }
    }
    return(
      <>
      <Breadcrumb>
      <Link to="/">Home</Link>/
      <Link to="/users">User</Link>/
      <Link to="/adduser">AddUser</Link>
</Breadcrumb>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" placeholder="Enter Firstname" id="fn" value={fname} onChange={random}/>
  {fnameError?<label style={{color:"red"}}>Enter firstname</label>:""}

  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" placeholder="Enter Lastname" id="ln" value={lname} onChange={random}/>
  {lnameError?<label style={{color:"red"}}>Enter Lastname</label>:""}

  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="em" value={Password} onChange={random}/>
  {PasswordError?<label style={{color:"red"}}>Enter Password</label>:""}

  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="button" onClick={validateForm}>
   Check
  </Button>
</Form>   
</>

    )
}
export default AddUser;

