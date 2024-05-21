import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from './components/layouts/sidebar';
import Header from './components/layouts/header';
import Dashboard from './components/dashboard';
import './App.css';
import Input from './axi-validation';
import Vendors from './components/vendors';
import Products from './components/products';
import Users from './components/users';
import AddUser from './components/users/adduser';
import AddUsers from "./components/users/add users";
function App() {
  return (
    <BrowserRouter>
    <div class="d-flex" id="wrapper">
    {/* <Input/> */}
    <Sidebar/>
        
    <div id="page-content-wrapper">
    <Header/>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/adduser" element={<AddUsers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vendors" element={<Vendors />} />
        </Routes>
 
  
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
