import axios from "axios";
import React, { useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
//  import { AddUsers } from "./AddUsers";
function AddUsers(){

  const firstnameId = document.getElementById('f_name');
  const lastnameId = document.getElementById('l_name');
  const emailId = document.getElementById('email');
  const phoneNumberId = document.getElementById('phone');
  const passwordId = document.getElementById('pass');
  const confirmPasswordId = document.getElementById('c_pass');
  // To Store a Data
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mailId, setMailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState('');

  // For Error
  const [firstnameReq, setFirstnameReq] = useState(false);
  const [lastnameReq, setLastnameReq] = useState(false);
  const [mailReq, setMailReq] = useState(false);
  const [phoneNumberReq, setPhoneNumberReq] = useState(false);
  const [passwordReq, setPasswordReq] = useState(false);
  const [confirmPasswordReq, setConfirmPasswordReq] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [photoReq, setPhotoReq] = useState(false);
  // For Regex
  const [mailReg, setMailReg] = useState(false);
  const [phoneNumberReg, setPhoneNumberReg] = useState(false);
  const [passwordReg, setPasswordReg] = useState(false);
  const [photoReg, setPhotoReg] = useState(false);
  // Regex
  const emailregex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneregex = /(\+91[\s-]?)?[6-9]\d{9}\b/g;
  const unameregex = '^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$';
  const numberRegex = /^\d*$/;

  // Finaly For addUser Button
  const [inputFilled, setInputFilled] = useState(false);
  const [inputFilledReq, setInputFilledReq] = useState(false);
  const [inputFilledReg, setInputFilledReg] = useState(false);
  const [final, setFinal] = useState(false);

  // onInput
  const inp = (event) => {
    if (event.target.id == 'f_name') {
      setFirstname(event.target.value);
      if (event.target.value) {
        setFirstnameReq(false)
        inputFilledFunction();
        inputFilledReqFunction();
      }

      else {
        setFirstnameReq(true)
      }
    }
    else if (event.target.id == 'l_name') {
      setLastname(event.target.value);
      if (event.target.value) {
        setLastnameReq(false)
        inputFilledFunction();
        inputFilledReqFunction();
      }

      else {
        setLastnameReq(true)
      }
    }
    else if (event.target.id == 'phone') {
      if (numberRegex.test(event.target.value)) {
        setPhoneNumber(event.target.value);
        if (phoneregex.test(event.target.value)) {
          setPhoneNumberReg(false)
          inputFilledRegFunction();
        }
        else { setPhoneNumberReg(true); inputFilledRegFunction(); }

        if (event.target.value) {
          setPhoneNumberReq(false)
          inputFilledFunction();
          inputFilledReqFunction();
        }

        else {
          setPhoneNumberReq(true)
        }
      }
    }
    else if (event.target.id == 'pass') {
      setPassword(event.target.value);
      if (passwordRegex.test(event.target.value)) {
        setPasswordReg(false)
        inputFilledRegFunction();
      }
      else { setPasswordReg(true); inputFilledRegFunction(); }
      if (event.target.value) {
        setPasswordReq(false)
        inputFilledFunction();
        inputFilledReqFunction();
        if (confirmPassword) {
          if (event.target.value == confirmPassword) {
            setCheckPassword(false);
          }
          else { setCheckPassword(true); }
        }
      }

      else {
        setPasswordReq(true)
      }

    }
    else if (event.target.id == 'c_pass') {
      setConfirmPassword(event.target.value);
      if (event.target.value) {
        setConfirmPasswordReq(false)
        inputFilledFunction();
        inputFilledReqFunction();
        if (password == event.target.value) {
          setCheckPassword(false);
        }
        else { setCheckPassword(true); }
      }

      else {
        setConfirmPasswordReq(true)
      }
    }
    else if (event.target.id == 'email') {
      setMailId(event.target.value);
      if (event.target.value) {
        setMailReq(false)
        inputFilledFunction();
        inputFilledReqFunction()
        if (emailregex.test(event.target.value)) {
           setMailReg(false);
          inputFilledRegFunction();
        }
        else { setMailReg(true); inputFilledRegFunction(); }
      }

      else {
        setMailReq(true)
      }
    }
    else if (event.target.id == 'photo') {
      setPhoto(event.target.files[0]);
      console.log(event.target.files[0]);
      var fileType = event.target.files[0].type;
      var split = fileType.split('/');
      // console.log(split)
      if(split[0] == "image")
      {
        setPhotoReg(false)
      }
      else { setPhotoReg(true) }
      setPhotoReq(false)
      inputFilledRegFunction()
      inputFilledReqFunction();
      inputFilledFunction();
      var fileReader = new FileReader();
      fileReader.onload = function(){
        var output = document.getElementById('profileImg');
        output.src = fileReader.result;
    };
    fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  // Checking Input Field Is it Filled or Not
  const inputFilledFunction = () => {
    if(firstname && lastname && phoneNumber && mailId && password && confirmPassword && photo)
    {
    setInputFilled(true);
    }
    else { setInputFilled(false); }
  }

  // Checking Input Field Requir useState Is it True or False
  const inputFilledReqFunction = () =>
  {
    if(!firstnameReq && !lastnameReq && !phoneNumberReq && !mailReq && !passwordReq && !confirmPasswordReq && !photoReq)
    {
      setInputFilledReq(true)
    }
    else{ setInputFilledReq(false) }
  }

  // Checking Input Field Regular Exception useState Is it True or False
  const inputFilledRegFunction = () =>
  {
    // {emailregex.test(mailId)?setMailReg(true):setMailReg(false)}
    // {phoneregex.test(phoneNumber)?setPhoneNumberReg(true):setPhoneNumberReg(false)}
    // {passwordRegex.test(password)?setPasswordReg(true):setPasswordReg(false)}
    if(!phoneNumberReg && !mailReg && !passwordReg && !photoReg)
    {
      console.log('1'+phoneNumberReg+'2'+mailReg+'3'+passwordReg+'4'+photoReg)
      setInputFilledReg(true)
    }
    else{ setInputFilledReg(false) 
      console.log('1'+phoneNumberReg+'2'+mailReg+'3'+passwordReg+'4'+photoReg)
    }
  }
  const finalFunction = () =>
  {
    if(inputFilled && inputFilledReq && inputFilledReg)
    {
      setFinal(true)
    }
    else { setFinal(false) }
  }
  const addUser = () =>
  {
    let userData = {
      firstname : firstname,
      lastname : lastname,
      phoneNumber : phoneNumber,
      mailId : mailId,
      password : password
    }
    if(firstname && lastname && phoneNumber && mailId && password && confirmPassword && photo) // Checking that all the fields are filled
    {
    if(!firstnameReq && !lastnameReq && !phoneNumberReq && !mailReq && !passwordReq && !confirmPasswordReq && !photoReq) //Checking that all the fields are filled and Errors a Cleared
    {
    if(!phoneNumberReg && !mailReg && !passwordReg && !photoReg) // Checking the Status of Regular Expression
    {
      // swal('success', 'User Created', 'success');
    axios.post('http://localhost:3001/users/addusers', userData)
    .then(function (response) {
      swal('success', 'User Created Successfully', 'success');
      // window.location = '/users'
    })
    .catch(function (error) {
      swal('error', 'error', 'warning');
      console.log(error);
    });
    }
    }
    }else {
    {firstname?setFirstnameReq(false):setFirstnameReq(true)}
    {lastname?setLastnameReq(false):setLastnameReq(true)}
    {mailId?setMailReq(false):setMailReq(true)}
    {phoneNumber?setPhoneNumberReq(false):setPhoneNumberReq(true)}
    {password?setPasswordReq(false):setPasswordReq(true)}
    {confirmPassword?setConfirmPasswordReq(false):setConfirmPasswordReq(true)}
    {photo?setPhotoReq(false):setPhotoReq(true)}
    }
    // else
    // {
      // if(!final)
      // {
      // swal('Required', 'Fill The Required Fields', 'warning');
      // }
      

    // }
    
  }
  const hideShowPassword = (event) =>
  {
    if(passwordId.type == 'password')
    {
      passwordId.type = 'text'
    }
    else { passwordId.type = 'password' }
  }
  return (
    <div className="">
    <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link >Add Users</Link></Breadcrumb.Item>
    </Breadcrumb>
    <Form>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pr-2">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Firstname" id="f_name" onInput={inp} value={firstname}/>
        {firstnameReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field Firstname</p>:''}
      </Form.Group>
        
      <Form.Group className="mb-4 w-50 d-inline-block px-3 pl-2">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Lastname" id="l_name" onInput={inp} value={lastname}/>
        {lastnameReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field Lastname</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pr-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" id="email" onInput={inp} value={mailId}/>
        {mailReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:mailReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Invalid Email</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pl-2" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" id="phone" minLength={10} maxLength={10} onInput={inp} value={phoneNumber}/>
        {phoneNumberReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:phoneNumberReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Invalid Phone Number</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pr-2 position-relative">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="pass" onInput={inp} value={password}/>
        <input type="checkbox" onChange={hideShowPassword} style={{position:'absolute', top:'45px', right:'30px'}}/>
        {passwordReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:passwordReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Invalid Password</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pl-2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" id="c_pass" onInput={inp} value={confirmPassword}/>
        {confirmPasswordReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:checkPassword?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Password Not Matching</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3">
        <Form.Label>Profile Photo</Form.Label>
        <Form.Control type="file" placeholder="Profile Photo" id="photo" onInput={inp} />
        {photoReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Please Select Image</p>:photoReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:''}
      </Form.Group>
      
      <div className="d-inline-block w-50 m-auto">
        <img src="" title="Photo" alt="Photo" id="profileImg" style={{height:"160px"}}/>
      </div>

      <Button variant="primary" type="button" onClick={addUser} className="m-auto mt-3" style={{width:"97%", display:"table"}}>
        Submit
      </Button>
    </Form>
    </div>
  );
} 

export default AddUsers;