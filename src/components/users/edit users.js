import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { ActionGetUserList } from "../actions/users";
//  import { AddUsers } from "./AddUsers";
function EditUser(){
  
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  const nav = useNavigate();
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(ActionGetUserList(id));
    }, []);
  
  const user = useSelector((state) => state);
  const userList = user.usersReducer.userList;
  console.log(user)
  console.log(userList)

  
  const firstnameId = document.getElementById('f_name');
  const lastnameId = document.getElementById('l_name');
  const emailId = document.getElementById('email');
  const phoneNumberId = document.getElementById('phone');
  const passwordId = document.getElementById('pass');
  // To Store a Data
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mailId, setMailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');


  // For Error
  const [firstnameReq, setFirstnameReq] = useState(false);
  const [lastnameReq, setLastnameReq] = useState(false);
  const [mailReq, setMailReq] = useState(false);
  const [phoneNumberReq, setPhoneNumberReq] = useState(false);
  const [passwordReq, setPasswordReq] = useState(false);
  const [photoReq, setPhotoReq] = useState(false);
  const [errorClear, setErrorClear] = useState(false);
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
  // const onload = () =>
  // {
  //   if(!firstname)
  // {
  //   setFirstname(firstname)
  // }
  // else if(!lastname)
  // {
  //   setLastname(lastname)
  // }
  // else if(!mailId)
  // {
  //   setMailId(emailId)
  // }
  // else if(!password)
  // {
  //   setPassword(password)
  
  // }

// onInput
  const inp = (event) => {
    if (event.target.id == 'f_name') {
      setFirstname(event.target.value);
      setErrorClear(true);
      if (event.target.value) {
        setFirstnameReq(false)
      }

      else {
        setFirstnameReq(true)
      }
    }
    else if (event.target.id == 'l_name') {
      setLastname(event.target.value);
      if (event.target.value) {
        setLastnameReq(false)
      }

      else {
        setLastnameReq(true)
      }
    }
    else if (event.target.id == 'phone') {
      if (numberRegex.test(event.target.value)) {
        setPhoneNumber(event.target.value);
        if(phoneregex.test(event.target.value)) {
          setPhoneNumberReg(false)
        }
        else { setPhoneNumberReg(true); }

        if (event.target.value) {
          setPhoneNumberReq(false)
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
      }
      else { setPasswordReg(true); }
    }
    else if (event.target.id == 'email') {
      setMailId(event.target.value);
      if (event.target.value) {
        setMailReq(false)
        if (emailregex.test(event.target.value)) {
           setMailReg(false);
        }
        else { setMailReg(true); }
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
      var fileReader = new FileReader();
      fileReader.onload = function(){
        var output = document.getElementById('profileImg');
        output.src = fileReader.result;
    };
    fileReader.readAsDataURL(event.target.files[0]);
    }
  };
  
  const updateUser = () =>
  {
    let userData = {
      id : id,
      firstname : firstname,
      lastname : lastname,
      phoneNumber : phoneNumber,
      mailId : mailId,
      password : password
    }
    if(firstname && lastname && phoneNumber && mailId && password && photo) // Checking that all the fields are filled
    {
    if(!firstnameReq && !lastnameReq && !phoneNumberReq && !mailReq && !passwordReq && !photoReq) //Checking that all the fields are filled and Errors a Cleared
    {
    if(!phoneNumberReg && !mailReg && !passwordReg && !photoReg) // Checking the Status of Regular Expression
    {
      axios.post('http://localhost:3001/users/edituser', userData)
    .then(function (response) {                       
      swal('Updated', 'User Updated Successfully', 'success');
      // window.location = '/users'
      // nav("/users");
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
    {photo?setPhotoReq(false):setPhotoReq(true)}
    }
  }
  const hideShowPassword = (event) =>
  {
    if(passwordId.type == 'password')
    {
      passwordId.type = 'text'
    }
    else { passwordId.type = 'password' }
  }

  const firstnameFunction = () =>
  {
    setFirstname(userList.firstname)
    setFirstnameReq(false)
  }
  const lastnameFunction = () =>
  {
    setLastname(userList.lastname)
    setLastnameReq(false)
  }
  const mailFunction = () =>
  {
    setMailId(userList.mailId)
    setMailReq(false)
    setMailReg(false)
  }
  const phnoFunction = () =>
  {
    setPhoneNumber(userList.phoneNumber)
    setPhoneNumberReq(false)
    setPhoneNumberReg(false)
  }
  const passwordFunction = () =>
  {
    setPassword(userList.password)
    setPasswordReq(false)
    setPasswordReg(false)
  }
  return (
    <div className="">
    <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/addusers">Add Users</Link></Breadcrumb.Item>
    </Breadcrumb>
    <Form>

    <Form.Group className="mb-4 w-100 d-inline-block px-3 pr-2">
        <Form.Label>_id</Form.Label>
        <Form.Control type="text" placeholder="Firstname" id="" readOnly value={id}/>
    </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pr-2">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Firstname" id="f_name" onInput={inp} value={firstname?firstname:(userList.firstname && setFirstname(userList.firstname))}/>
        {firstnameReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field Firstname</p>:''}
      </Form.Group>
        
      <Form.Group className="mb-4 w-50 d-inline-block px-3 pl-2">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Lastname" id="l_name" onInput={inp} value={lastname?lastname:(userList.lastname && setLastname(userList.lastname))}/>
        {lastnameReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field Lastname</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pr-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" id="email" onInput={inp} value={mailId?mailId:(userList.mailId && setMailId(userList.mailId))}/>
        {mailReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:mailReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Invalid Email</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pl-2" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" id="phone" minLength={10} maxLength={10} onInput={inp} value={phoneNumber?phoneNumber:(userList.phoneNumber && setPhoneNumber(userList.phoneNumber))}/>
        {phoneNumberReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:phoneNumberReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Invalid Phone Number</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3 pr-2 position-relative">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="pass" onInput={inp} value={password?password:(userList.password && setPassword(userList.password))}/>
        <input type="checkbox" onChange={hideShowPassword} style={{position:'absolute', top:'45px', right:'30px'}}/>
        {passwordReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:passwordReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Invalid Password</p>:''}
      </Form.Group>

      <Form.Group className="mb-4 w-50 d-inline-block px-3">
        <Form.Label>Profile Photo</Form.Label>
        <Form.Control type="file" placeholder="Profile Photo" id="photo" onInput={inp} />
        {photoReg?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Please Select Image</p>:photoReq?<p className="position-absolute text-danger" style={{fontSize:"15px"}}>Required Field</p>:''}
      </Form.Group>
      
      <div className="w-100 m-auto d-flex justify-content-center">
        <img src="" title="Photo" alt="Photo" className="m-auto" id="profileImg" style={{maxHeight:"160px"}}/>
      </div>
      <Button variant="primary" type="button" onClick={updateUser} className="m-auto mt-3" style={{width:"97%", display:"table"}}>
        Submit
      </Button>
    </Form>
    </div>
  );
} 

export default EditUser;