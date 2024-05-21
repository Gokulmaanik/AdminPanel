import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {  Link } from "react-router-dom";
import{useEffect, useState} from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AC_GET_PRODUCTS_LIST } from '../actions/dashoard';
import axios from 'axios';
import React from 'react';
function Dashboard(){
const dashboardState=useSelector((state)=>state.DashboardReducer)
const productsList=dashboardState.productsList
const [userLength,setUserLength]=useState('')
console.log("==dashboardState===",productsList.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AC_GET_PRODUCTS_LIST())
    axios.get('http://localhost:3001/users/usersList', {})
    .then(function (response) {
      // console.log("+++++++++++++++++++++++++++",response.data);
      setUserLength(response.data.length)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
  
    return(
<Container>
  <Row>
    <Col style={{background:"black",height:"200px"}} >
      <Link to="/products"  style={{fontWeight: 700,color: 'aliceblue',fontSize: '39px', textDecoration: "none"}}>
      <h1 style={{color: "ghostwhite", textDecoration: "none"}}>products</h1>
    < p >{productsList.length}</p></Link> 
   </Col>
    <Col style={{background:"turquoise",height:"200px"}} >
    <Link to="/users" style={{fontWeight: 700,color: 'aliceblue',fontSize: '39px', textDecoration: "none"}}><h1 style={{color: "ghostwhite",}}>Users</h1>
    < p >{userLength}</p></Link></Col>
    <Col style={{background:"red",height:"200px"}} >
      <Link to="/vendors"  style={{fontWeight: 700,color: 'aliceblue',fontSize: '39px', textDecoration: "none"}} ><h1 >Vendors</h1>
    < p style={{color: "black", textDecoration: "none"}}>30</p></Link></Col>
  </Row>
</Container>
    )
}
export default Dashboard;