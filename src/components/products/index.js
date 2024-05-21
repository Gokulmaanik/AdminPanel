import Table from 'react-bootstrap/Table'

import { useSelector } from "react-redux";
function Products(){
    const dashboardState=useSelector((state)=>state.DashboardReducer)
const productsList=dashboardState.productsList;
console.log("productsList",productsList);
    return(
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>brand</th>
              <th>price</th>
              <th>rating</th>
              <th>stock</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
          {productsList.map((products) =>
            <tr>
              <td>{products.id}</td>
              <td>{products.title}</td>
              <td>{products.brand}</td>
              <td>{products.price}</td>
              <td>{products.rating}</td>
              <td>{products.stock}</td>
              <td>{products.description}</td>
            </tr>
          )} 
          </tbody>
        </Table>
    )
}
export default Products;