import { useState } from "react";
import axios from 'axios';

function Input(){
   

    const[age,setAge]=useState("")
    const[ageError,setAgeError]=useState(false)

    const[firstname,setfirstname]=useState("")
    const[firstnameError,setfirstnameError]=useState(false)

    const[lastname,setLastname]=useState("")
    const[lastnameError,setLastnameError]=useState(false)
    const validateForm=()=>{
        let ulastname=lastname
        let uage = age
        let ufname = firstname
           if(ufname){
        setfirstnameError(false)
        }else{
        setfirstnameError(true)
              }
        if(uage){
      
            setAgeError(false)
        }else{
            setAgeError(true)
        }
        
    if(ulastname){
        setLastnameError(false)
    }else{
        setLastnameError(true)
    }

    axios.post('https://dummyjson.com/users/add', {
        firstName: ufname,
        lastName: ulastname,
        age:uage
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 
        // console.log("-----validateForm------",uemail);
        // console.log("-----validateForm---mgokul16082001@gmail.com----",upwd);
    }
    const random=(event)=>{
        const id=event.target.id
        const value=event.target.value
        if(id=="fname"){
            setfirstname(value) 
        }
         if(id=="lname"){
            setLastname(value) 
        }
         if(id=="ag"){
            setAge(value) 
        }
        
    }
    return(
        <>
      
        <div >
              <input type="text" id="fname" value={firstname} onChange={random}/>
        </div>
               {firstnameError?<label style={{color:"red"}}>Enter firstname</label>:""}
       <div>
             <input type="text" id="lname" value={lastname} onChange={random}/>
       </div>
              {lastnameError?<label style={{color:"red"}}>Enter lastname</label>:""}
        <div>
             <input type="age" id="ag" value={age} onChange={random}/>
       </div>
             {ageError?<label style={{color:"red"}}>Enter age</label>:""}
        <div>
            < input type="button" value="validate" onClick={validateForm}/>
         </div>
   
   
</>
    )
}

export default Input;