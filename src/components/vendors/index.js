import Table from 'react-bootstrap/Table'
import{useEffect} from "react";
import{useState} from "react";
import axios from 'axios';

function Vendors(){
  
  const[vendorsList,setVendorsList]=useState([])
  useEffect(() => {

    axios.get('https://dummyjson.com/users', {})
    .then(function (response) {
      // console.log(response.data.users);
      setVendorsList(response.data.users)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  // console.log(usersList);

return(
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
  {vendorsList.map((vendors) =>
    <tr>
      <td>{vendors.id}</td>
      <td>{vendors.firstName}</td>
      <td>{vendors.lastName}</td>
      <td>{vendors.age}</td>
    </tr>
  )}
  </tbody>
</Table>
)
}
export default Vendors;