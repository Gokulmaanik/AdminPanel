import Table from 'react-bootstrap/Table'
import {  Link } from "react-router-dom";
import{useEffect} from "react";
import{useState} from "react";
import axios from 'axios';
function Users(){
  const[usersList,setUsersList]=useState([])
  useEffect(() => {

    axios.get('http://localhost:3001/users/usersList', {})
    .then(function (response) {
      // console.log("+++++++++++++++++++++++++++",response.data);
      setUsersList(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  console.log(usersList);

    return(
      <>
            <Link to="/adduser" style={{textDecoration: "none"}}>+AddUser</Link>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <td>email</td>
      <td>phone</td>
      {/* <th>age</th>
      <th>height</th>
      <th>email</th>
      <th>gender</th>
      <th>bloodgroup</th> */}
    </tr>
  </thead>
  <tbody>
  {usersList.map((users) =>
    <tr>
      <td>{users._id}</td>
      {/* it is for reduce the database 16 digit id to 3 digit number   .substring(21).padStart(4,'*')  */}
      <td>{users.firstname}</td>
      <td>{users.lastname}</td>
      <td>{users.mailId}</td>
      <td>{users.phoneNumber}</td>

    </tr>
  )} 
  </tbody>
</Table>
</>

    )
}
export default Users;