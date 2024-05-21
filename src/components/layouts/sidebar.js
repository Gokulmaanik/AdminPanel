import {  Link } from "react-router-dom";

function Sidebar(){
    return(
        <div>
              <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div class="list-group list-group-flush">
                    <Link  class="list-group-item list-group-item-action list-group-item-light p-3" to="/">Dashboard</Link >
                    <Link  class="list-group-item list-group-item-action list-group-item-light p-3" to="/users">USERS</Link >
                    <Link  class="list-group-item list-group-item-action list-group-item-light p-3" to="/products">PRODUCTS</Link >
                    <Link class="list-group-item list-group-item-action list-group-item-light p-3" to="/vendors">VENDORS</Link >
                </div>
            </div>
        </div>
    )
}
export default Sidebar;